import { describe, expect, test, beforeAll } from "@jest/globals";
import { generateDatabase, refRootName } from "@/lib/database/generateTables";
import knex from "knex";
import { readFileSync } from "fs";
import standardsJSON from "@/lib/standards/schemas.json"; 
import * as standards from "@/lib/standards/standards";
import { JSONSchema4 } from "json-schema";
const sqlfilename = "./test/output/standards.sql";
import write from "@/lib/database/write";
import read from "@/lib/database/read";
import { readFB, writeFB } from "@/lib/utility/flatbufferConversion";
import { execSync } from "node:child_process";
import databaseConfig from "./config/test.database.config.json"
const dataPath: string = "test/output/data";
const databasePath: string = "test/output/database";

let knexConnection: any;

let standardsArray: Array<JSONSchema4> = Object.values(standardsJSON as any);

beforeAll(async () => {
    execSync(`rm -rf ${databasePath}/*.* && mkdir -p ${databasePath}`);
    knexConnection = await knex(databaseConfig);
    await generateDatabase(standardsArray, databaseConfig.connection.filename, sqlfilename, knexConnection);
});

describe('Test Generation', () => {
    test('Generate Database With Correct Tables', async () => {
        for (let s = 0; s < standardsArray.length; s++) {
            let tableName = refRootName(standardsArray[s].$ref);
            let cI = await knexConnection(tableName).columnInfo();
            expect(Object.keys(cI).length).toBeGreaterThan(0);
        }
    });
});

describe('Test Data Entry', () => {
    test('Enter Data For Each Data Type', async () => {
        let standard: keyof typeof standards;

        for (standard in standards) {
            if (standard !== "OMM") continue;
            let currentStandard = standardsJSON[standard] as any;
            let tableName = refRootName(currentStandard.$ref);
            let pClassName: keyof typeof standards = `${tableName}` as unknown as any;
            let parentClass: any = standards[pClassName];
            let flatBufferInput: Buffer = readFileSync(`${dataPath}/${tableName}.input.fbs`);
            let flatBufferObject = await readFB(flatBufferInput, tableName, parentClass);
            let DIGITAL_SIGNATURE = await readFileSync(`${dataPath}/${tableName}.input.fbs.eth.sig`, "utf8");
            let CID = await readFileSync(`${dataPath}/${tableName}.input.fbs.ipfs.cid.txt`, "utf8");
            await write(knexConnection, tableName, flatBufferObject.RECORDS, currentStandard, CID, DIGITAL_SIGNATURE);
            const output = await read(knexConnection, standard, currentStandard, [["select", "*"], ["where", ["file_id", "=", CID]]], false);
            expect(JSON.stringify(flatBufferObject, null, 4)).toEqual(JSON.stringify(output, null, 4));

            //Sanity Check
            expect(flatBufferInput).toEqual(writeFB(flatBufferObject));
        }

    })
});
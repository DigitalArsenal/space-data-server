import { existsSync, readFileSync, writeFileSync } from "fs";
import { Settings } from "@/lib/class/settings.interface";
import defaultConfig from "./default.config.json";

let _config: any;

const configPath: any = "./config.json";

if (!existsSync(configPath)) {
    writeFileSync(configPath, JSON.stringify(defaultConfig, null, 4));
}

const exportObj = {
    get tconfig() {
        if (!_config) {
            try {
                _config = JSON.parse(readFileSync(configPath, "utf8"));
            } catch (e) {
                throw Error(`Failed to parse config at ${configPath}`);
            }
        }
        return _config;
    }
}

const config = exportObj.tconfig as Settings;

export { config };

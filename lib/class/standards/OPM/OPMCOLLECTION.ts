// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { OPM, OPMT } from './OPM.js';


export class OPMCOLLECTION implements flatbuffers.IUnpackableObject<OPMCOLLECTIONT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):OPMCOLLECTION {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsOPMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:OPMCOLLECTION):OPMCOLLECTION {
  return (obj || new OPMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsOPMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:OPMCOLLECTION):OPMCOLLECTION {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new OPMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

RECORDS(index: number, obj?:OPM):OPM|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new OPM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startOPMCOLLECTION(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addRecords(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, RECORDSOffset, 0);
}

static createRecordsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startRecordsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endOPMCOLLECTION(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createOPMCOLLECTION(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  OPMCOLLECTION.startOPMCOLLECTION(builder);
  OPMCOLLECTION.addRecords(builder, RECORDSOffset);
  return OPMCOLLECTION.endOPMCOLLECTION(builder);
}

unpack(): OPMCOLLECTIONT {
  return new OPMCOLLECTIONT(
    this.bb!.createObjList<OPM, OPMT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: OPMCOLLECTIONT): void {
  _o.RECORDS = this.bb!.createObjList<OPM, OPMT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class OPMCOLLECTIONT implements flatbuffers.IGeneratedObject {
constructor(
  public RECORDS: (OPMT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const RECORDS = OPMCOLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return OPMCOLLECTION.createOPMCOLLECTION(builder,
    RECORDS
  );
}
}

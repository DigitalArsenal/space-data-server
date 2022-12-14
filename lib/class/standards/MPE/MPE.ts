// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class MPE implements flatbuffers.IUnpackableObject<MPET> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):MPE {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMPE(bb:flatbuffers.ByteBuffer, obj?:MPE):MPE {
  return (obj || new MPE()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMPE(bb:flatbuffers.ByteBuffer, obj?:MPE):MPE {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MPE()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('$MPE');
}

ENTITY_ID():string|null
ENTITY_ID(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ENTITY_ID(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

USER_DEFINED_EPOCH_TIMESTAMP():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

MEAN_MOTION():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

ECCENTRICITY():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

INCLINATION():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

RA_OF_ASC_NODE():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

ARG_OF_PERICENTER():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

MEAN_ANOMALY():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

BSTAR():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

static startMPE(builder:flatbuffers.Builder) {
  builder.startObject(9);
}

static addEntityId(builder:flatbuffers.Builder, ENTITY_IDOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, ENTITY_IDOffset, 0);
}

static addUserDefinedEpochTimestamp(builder:flatbuffers.Builder, USER_DEFINED_EPOCH_TIMESTAMP:number) {
  builder.addFieldFloat64(1, USER_DEFINED_EPOCH_TIMESTAMP, 0.0);
}

static addMeanMotion(builder:flatbuffers.Builder, MEAN_MOTION:number) {
  builder.addFieldFloat64(2, MEAN_MOTION, 0.0);
}

static addEccentricity(builder:flatbuffers.Builder, ECCENTRICITY:number) {
  builder.addFieldFloat64(3, ECCENTRICITY, 0.0);
}

static addInclination(builder:flatbuffers.Builder, INCLINATION:number) {
  builder.addFieldFloat64(4, INCLINATION, 0.0);
}

static addRaOfAscNode(builder:flatbuffers.Builder, RA_OF_ASC_NODE:number) {
  builder.addFieldFloat64(5, RA_OF_ASC_NODE, 0.0);
}

static addArgOfPericenter(builder:flatbuffers.Builder, ARG_OF_PERICENTER:number) {
  builder.addFieldFloat64(6, ARG_OF_PERICENTER, 0.0);
}

static addMeanAnomaly(builder:flatbuffers.Builder, MEAN_ANOMALY:number) {
  builder.addFieldFloat64(7, MEAN_ANOMALY, 0.0);
}

static addBstar(builder:flatbuffers.Builder, BSTAR:number) {
  builder.addFieldFloat64(8, BSTAR, 0.0);
}

static endMPE(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishMPEBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$MPE');
}

static finishSizePrefixedMPEBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$MPE', true);
}

static createMPE(builder:flatbuffers.Builder, ENTITY_IDOffset:flatbuffers.Offset, USER_DEFINED_EPOCH_TIMESTAMP:number, MEAN_MOTION:number, ECCENTRICITY:number, INCLINATION:number, RA_OF_ASC_NODE:number, ARG_OF_PERICENTER:number, MEAN_ANOMALY:number, BSTAR:number):flatbuffers.Offset {
  MPE.startMPE(builder);
  MPE.addEntityId(builder, ENTITY_IDOffset);
  MPE.addUserDefinedEpochTimestamp(builder, USER_DEFINED_EPOCH_TIMESTAMP);
  MPE.addMeanMotion(builder, MEAN_MOTION);
  MPE.addEccentricity(builder, ECCENTRICITY);
  MPE.addInclination(builder, INCLINATION);
  MPE.addRaOfAscNode(builder, RA_OF_ASC_NODE);
  MPE.addArgOfPericenter(builder, ARG_OF_PERICENTER);
  MPE.addMeanAnomaly(builder, MEAN_ANOMALY);
  MPE.addBstar(builder, BSTAR);
  return MPE.endMPE(builder);
}

unpack(): MPET {
  return new MPET(
    this.ENTITY_ID(),
    this.USER_DEFINED_EPOCH_TIMESTAMP(),
    this.MEAN_MOTION(),
    this.ECCENTRICITY(),
    this.INCLINATION(),
    this.RA_OF_ASC_NODE(),
    this.ARG_OF_PERICENTER(),
    this.MEAN_ANOMALY(),
    this.BSTAR()
  );
}


unpackTo(_o: MPET): void {
  _o.ENTITY_ID = this.ENTITY_ID();
  _o.USER_DEFINED_EPOCH_TIMESTAMP = this.USER_DEFINED_EPOCH_TIMESTAMP();
  _o.MEAN_MOTION = this.MEAN_MOTION();
  _o.ECCENTRICITY = this.ECCENTRICITY();
  _o.INCLINATION = this.INCLINATION();
  _o.RA_OF_ASC_NODE = this.RA_OF_ASC_NODE();
  _o.ARG_OF_PERICENTER = this.ARG_OF_PERICENTER();
  _o.MEAN_ANOMALY = this.MEAN_ANOMALY();
  _o.BSTAR = this.BSTAR();
}
}

export class MPET implements flatbuffers.IGeneratedObject {
constructor(
  public ENTITY_ID: string|Uint8Array|null = null,
  public USER_DEFINED_EPOCH_TIMESTAMP: number = 0.0,
  public MEAN_MOTION: number = 0.0,
  public ECCENTRICITY: number = 0.0,
  public INCLINATION: number = 0.0,
  public RA_OF_ASC_NODE: number = 0.0,
  public ARG_OF_PERICENTER: number = 0.0,
  public MEAN_ANOMALY: number = 0.0,
  public BSTAR: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const ENTITY_ID = (this.ENTITY_ID !== null ? builder.createString(this.ENTITY_ID!) : 0);

  return MPE.createMPE(builder,
    ENTITY_ID,
    this.USER_DEFINED_EPOCH_TIMESTAMP,
    this.MEAN_MOTION,
    this.ECCENTRICITY,
    this.INCLINATION,
    this.RA_OF_ASC_NODE,
    this.ARG_OF_PERICENTER,
    this.MEAN_ANOMALY,
    this.BSTAR
  );
}
}

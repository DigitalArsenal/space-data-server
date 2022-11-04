"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var OEM_exports = {};
__export(OEM_exports, {
  OEM: () => OEM,
  OEMT: () => OEMT
});
module.exports = __toCommonJS(OEM_exports);
var flatbuffers = __toESM(require("flatbuffers"));
var import_ephemerisDataBlock = require("./ephemerisDataBlock");
class OEM {
  bb = null;
  bb_pos = 0;
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsOEM(bb, obj) {
    return (obj || new OEM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsOEM(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new OEM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static bufferHasIdentifier(bb) {
    return bb.__has_identifier("$OEM");
  }
  CCSDS_OEM_VERS() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  CREATION_DATE(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  ORIGINATOR(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  EPHEMERIS_DATA_BLOCK(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new import_ephemerisDataBlock.ephemerisDataBlock()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  EPHEMERIS_DATA_BLOCKLength() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startOEM(builder) {
    builder.startObject(4);
  }
  static addCCSDS_OEM_VERS(builder, CCSDS_OEM_VERS) {
    builder.addFieldFloat64(0, CCSDS_OEM_VERS, 0);
  }
  static addCREATION_DATE(builder, CREATION_DATEOffset) {
    builder.addFieldOffset(1, CREATION_DATEOffset, 0);
  }
  static addORIGINATOR(builder, ORIGINATOROffset) {
    builder.addFieldOffset(2, ORIGINATOROffset, 0);
  }
  static addEPHEMERIS_DATA_BLOCK(builder, EPHEMERIS_DATA_BLOCKOffset) {
    builder.addFieldOffset(3, EPHEMERIS_DATA_BLOCKOffset, 0);
  }
  static createEPHEMERIS_DATA_BLOCKVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startEPHEMERIS_DATA_BLOCKVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endOEM(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishOEMBuffer(builder, offset) {
    builder.finish(offset, "$OEM");
  }
  static finishSizePrefixedOEMBuffer(builder, offset) {
    builder.finish(offset, "$OEM", true);
  }
  static createOEM(builder, CCSDS_OEM_VERS, CREATION_DATEOffset, ORIGINATOROffset, EPHEMERIS_DATA_BLOCKOffset) {
    OEM.startOEM(builder);
    OEM.addCCSDS_OEM_VERS(builder, CCSDS_OEM_VERS);
    OEM.addCREATION_DATE(builder, CREATION_DATEOffset);
    OEM.addORIGINATOR(builder, ORIGINATOROffset);
    OEM.addEPHEMERIS_DATA_BLOCK(builder, EPHEMERIS_DATA_BLOCKOffset);
    return OEM.endOEM(builder);
  }
  unpack() {
    return new OEMT(
      this.CCSDS_OEM_VERS(),
      this.CREATION_DATE(),
      this.ORIGINATOR(),
      this.bb.createObjList(this.EPHEMERIS_DATA_BLOCK.bind(this), this.EPHEMERIS_DATA_BLOCKLength())
    );
  }
  unpackTo(_o) {
    _o.CCSDS_OEM_VERS = this.CCSDS_OEM_VERS();
    _o.CREATION_DATE = this.CREATION_DATE();
    _o.ORIGINATOR = this.ORIGINATOR();
    _o.EPHEMERIS_DATA_BLOCK = this.bb.createObjList(this.EPHEMERIS_DATA_BLOCK.bind(this), this.EPHEMERIS_DATA_BLOCKLength());
  }
}
class OEMT {
  constructor(CCSDS_OEM_VERS = 0, CREATION_DATE = null, ORIGINATOR = null, EPHEMERIS_DATA_BLOCK = []) {
    this.CCSDS_OEM_VERS = CCSDS_OEM_VERS;
    this.CREATION_DATE = CREATION_DATE;
    this.ORIGINATOR = ORIGINATOR;
    this.EPHEMERIS_DATA_BLOCK = EPHEMERIS_DATA_BLOCK;
  }
  pack(builder) {
    const CREATION_DATE = this.CREATION_DATE !== null ? builder.createString(this.CREATION_DATE) : 0;
    const ORIGINATOR = this.ORIGINATOR !== null ? builder.createString(this.ORIGINATOR) : 0;
    const EPHEMERIS_DATA_BLOCK = OEM.createEPHEMERIS_DATA_BLOCKVector(builder, builder.createObjectOffsetList(this.EPHEMERIS_DATA_BLOCK));
    return OEM.createOEM(
      builder,
      this.CCSDS_OEM_VERS,
      CREATION_DATE,
      ORIGINATOR,
      EPHEMERIS_DATA_BLOCK
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OEM,
  OEMT
});
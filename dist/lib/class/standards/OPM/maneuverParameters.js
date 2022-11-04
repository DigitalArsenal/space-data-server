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
var maneuverParameters_exports = {};
__export(maneuverParameters_exports, {
  maneuverParameters: () => maneuverParameters,
  maneuverParametersT: () => maneuverParametersT
});
module.exports = __toCommonJS(maneuverParameters_exports);
var flatbuffers = __toESM(require("flatbuffers"));
var import_manCovRefFrame = require("./manCovRefFrame");
class maneuverParameters {
  bb = null;
  bb_pos = 0;
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsmaneuverParameters(bb, obj) {
    return (obj || new maneuverParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsmaneuverParameters(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new maneuverParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  MAN_EPOCH_IGNITION(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  MAN_DURATION() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  MAN_DELTA_MASS() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  MAN_REF_FRAME() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : import_manCovRefFrame.manCovRefFrame.RSW;
  }
  MAN_DV_1() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  MAN_DV_2() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  MAN_DV_3() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  static startmaneuverParameters(builder) {
    builder.startObject(7);
  }
  static addMAN_EPOCH_IGNITION(builder, MAN_EPOCH_IGNITIONOffset) {
    builder.addFieldOffset(0, MAN_EPOCH_IGNITIONOffset, 0);
  }
  static addMAN_DURATION(builder, MAN_DURATION) {
    builder.addFieldFloat64(1, MAN_DURATION, 0);
  }
  static addMAN_DELTA_MASS(builder, MAN_DELTA_MASS) {
    builder.addFieldFloat64(2, MAN_DELTA_MASS, 0);
  }
  static addMAN_REF_FRAME(builder, MAN_REF_FRAME) {
    builder.addFieldInt8(3, MAN_REF_FRAME, import_manCovRefFrame.manCovRefFrame.RSW);
  }
  static addMAN_DV_1(builder, MAN_DV_1) {
    builder.addFieldFloat64(4, MAN_DV_1, 0);
  }
  static addMAN_DV_2(builder, MAN_DV_2) {
    builder.addFieldFloat64(5, MAN_DV_2, 0);
  }
  static addMAN_DV_3(builder, MAN_DV_3) {
    builder.addFieldFloat64(6, MAN_DV_3, 0);
  }
  static endmaneuverParameters(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createmaneuverParameters(builder, MAN_EPOCH_IGNITIONOffset, MAN_DURATION, MAN_DELTA_MASS, MAN_REF_FRAME, MAN_DV_1, MAN_DV_2, MAN_DV_3) {
    maneuverParameters.startmaneuverParameters(builder);
    maneuverParameters.addMAN_EPOCH_IGNITION(builder, MAN_EPOCH_IGNITIONOffset);
    maneuverParameters.addMAN_DURATION(builder, MAN_DURATION);
    maneuverParameters.addMAN_DELTA_MASS(builder, MAN_DELTA_MASS);
    maneuverParameters.addMAN_REF_FRAME(builder, MAN_REF_FRAME);
    maneuverParameters.addMAN_DV_1(builder, MAN_DV_1);
    maneuverParameters.addMAN_DV_2(builder, MAN_DV_2);
    maneuverParameters.addMAN_DV_3(builder, MAN_DV_3);
    return maneuverParameters.endmaneuverParameters(builder);
  }
  unpack() {
    return new maneuverParametersT(
      this.MAN_EPOCH_IGNITION(),
      this.MAN_DURATION(),
      this.MAN_DELTA_MASS(),
      this.MAN_REF_FRAME(),
      this.MAN_DV_1(),
      this.MAN_DV_2(),
      this.MAN_DV_3()
    );
  }
  unpackTo(_o) {
    _o.MAN_EPOCH_IGNITION = this.MAN_EPOCH_IGNITION();
    _o.MAN_DURATION = this.MAN_DURATION();
    _o.MAN_DELTA_MASS = this.MAN_DELTA_MASS();
    _o.MAN_REF_FRAME = this.MAN_REF_FRAME();
    _o.MAN_DV_1 = this.MAN_DV_1();
    _o.MAN_DV_2 = this.MAN_DV_2();
    _o.MAN_DV_3 = this.MAN_DV_3();
  }
}
class maneuverParametersT {
  constructor(MAN_EPOCH_IGNITION = null, MAN_DURATION = 0, MAN_DELTA_MASS = 0, MAN_REF_FRAME = import_manCovRefFrame.manCovRefFrame.RSW, MAN_DV_1 = 0, MAN_DV_2 = 0, MAN_DV_3 = 0) {
    this.MAN_EPOCH_IGNITION = MAN_EPOCH_IGNITION;
    this.MAN_DURATION = MAN_DURATION;
    this.MAN_DELTA_MASS = MAN_DELTA_MASS;
    this.MAN_REF_FRAME = MAN_REF_FRAME;
    this.MAN_DV_1 = MAN_DV_1;
    this.MAN_DV_2 = MAN_DV_2;
    this.MAN_DV_3 = MAN_DV_3;
  }
  pack(builder) {
    const MAN_EPOCH_IGNITION = this.MAN_EPOCH_IGNITION !== null ? builder.createString(this.MAN_EPOCH_IGNITION) : 0;
    return maneuverParameters.createmaneuverParameters(
      builder,
      MAN_EPOCH_IGNITION,
      this.MAN_DURATION,
      this.MAN_DELTA_MASS,
      this.MAN_REF_FRAME,
      this.MAN_DV_1,
      this.MAN_DV_2,
      this.MAN_DV_3
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  maneuverParameters,
  maneuverParametersT
});
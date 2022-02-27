import mongoose from "mongoose";

/**
 *  TechLeafスキーマ.
 *
 *  @remarks
 *  - TechLeaf名 : string
 *  - techBranch_id(外部キー) : string
 */
const TechLeafSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  techBranch_id: {
    type: String,
    required: true,
  },
});

/**
 *  TechBranchスキーマ.
 *
 *  @remarks
 *  - TechBranch名 : string
 *  - techTree_id(外部キー) : string
 */
const TechBranchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  techTree_id: {
    type: String,
    required: true,
  },
});

/**
 *  TechTreeスキーマ.
 *
 *  @remarks
 *  - TechTree名 : string
 *  - techArea_id(外部キー) : string
 */
const TechTreeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  techArea_id: {
    type: String,
    required: true,
  },
});

/**
 *  TechAreaスキーマ.
 *
 *  @remarks
 *  - TechArea名 : string
 */
const TechAreaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const TechLeaf = mongoose.model("techleaf", TechLeafSchema);
export const TechBranch = mongoose.model("techbranch", TechBranchSchema);
export const TechTree = mongoose.model("techtree", TechTreeSchema);
export const TechArea = mongoose.model("techarea", TechAreaSchema);

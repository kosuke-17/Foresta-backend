import mongoose from "mongoose";

/**
 *  TechLeafスキーマ
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
  },
});

export const TechLeaf = mongoose.model("techleaf", TechLeafSchema);

/**
 *  TechBranchスキーマ
 *  @remarks
 *  - TechBranch名 : string
 */
const TechBranchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const TechBranch = mongoose.model("techbranch", TechBranchSchema);

/**
 *  TechTreeスキーマ
 *  @remarks
 *  - TechTree名 : string
 */
const TechTreeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const TechTree = mongoose.model("techtree", TechTreeSchema);

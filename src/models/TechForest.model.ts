import mongoose from "mongoose";

/**
 *  TechLeafスキーマ
 *
 *  @remarks
 *  - ユーザー名 : string
 *  - 職業タイプ : string
 *  - GithubURL : string
 */
const TechLeafSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const TechLeaf = mongoose.model("techleaf", TechLeafSchema);

/**
 *  TechBranchスキーマ
 *  @remarks
 *  - ユーザー名 : string
 *  - 職業タイプ : string
 *  - GithubURL : string
 */
const TechBranchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const TechBranch = mongoose.model("techbranch", TechBranchSchema);

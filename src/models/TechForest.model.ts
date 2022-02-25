import mongoose from "mongoose";

/**
 *  ユーザースキーマ
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

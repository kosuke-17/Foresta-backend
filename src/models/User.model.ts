import mongoose from "mongoose";

/**
 *  ユーザースキーマ
 *  @remarks
 *  - ユーザー名 : string
 *  - 職業タイプ : string
 *  - GithubURL : string
 */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  githubURL: {
    type: String,
  },
});

export const User = mongoose.model("user", UserSchema);

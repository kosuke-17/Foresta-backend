import mongoose from "mongoose";

/**
 *  ユーザースキーマ
 *  @remarks
 *  - ユーザー名 : string
 *  - 職業タイプ : string
 *  - GithubURL : string
 *  - techLeaf習得技術 : string[]]
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
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  githubURL: {
    type: String,
  },
  have_techLeafs: [String],
});

export const User = mongoose.model("user", UserSchema);

/**
 *  ユーザーURLスキーマ
 *  @remarks
 *  - ユーザーID : string
 *  - Url名 : string
 *  - Url : string
 */
const UserUrlsSchema = new mongoose.Schema({
  user_urls: [
    {
      urlName: { type: String },
      url: { type: String },
    },
  ],
  userId: { type: String },
});

export const UserUrls = mongoose.model("userurls", UserUrlsSchema);

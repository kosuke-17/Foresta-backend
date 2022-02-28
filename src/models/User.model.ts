import mongoose from "mongoose";

/**
 *  ユーザースキーマ.
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
 *  ユーザーURLスキーマ.
 *  @remarks
 *  -
 *    - ユニークなID : string
 *    - Url名 : string
 *    - Url : string
 *  - ユーザーID : string
 */
const UserUrlsSchema = new mongoose.Schema({
  user_urls: [
    {
      uid: { type: String },
      urlName: { type: String },
      url: { type: String },
    },
  ],
  userId: { type: String },
});

export const UserUrls = mongoose.model("userurl", UserUrlsSchema);

/**
 *  ユーザーTodoスキーマ.
 *  @remarks
 *  -
 *    - タイトル : string
 *    - 説明 : string
 *    - 開始日 : string
 *    - 終了日 : string
 *    - todo状態 : string
 *    - ユーザーID : string
 */
const UseTodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  startedAt: String,
  finishedAt: String,
  isStatus: Boolean,
  userId: String,
});

export const UserTodo = mongoose.model("userTodo", UseTodoSchema);

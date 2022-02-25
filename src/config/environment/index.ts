import dotenv from "dotenv";

// envファイルの利用を可能にする
dotenv.config();
// 設定されている環境変数にPORT番号がなければ4000版で起動
const port = process.env.PORT || 4000;
// プロジェクトの開発環境を判定
const env = {
  development: process.env.NODE_ENV === "development",
  test: process.env.NODE_ENV === "test",
  staging: process.env.NODE_ENV === "staging",
  production: process.env.NODE_ENV === "production",
};
export { port, env };

// MongoDBのURLを取得
export const MONGOURI = process.env.MONGO_URI || "";

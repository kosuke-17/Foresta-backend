import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";

// 指定したディレクトリ以下のファイルを出力
const gqlFiles = readdirSync(join(__dirname, "./typeDefs"));

let typeDefs = "";

// 指定したファイルの内容を読み込む
gqlFiles.forEach((file) => {
  typeDefs += readFileSync(join(__dirname, "./typeDefs", file), {
    encoding: "utf8",
  });
});

// スキーマを作成
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;

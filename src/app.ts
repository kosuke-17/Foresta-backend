import { port } from "./config/environment";
import express from "express";
import apolloServer from "./graphql";
import mongoose from "mongoose";
import { MONGOURI } from "./config/environment";
import cors from "cors";

const start = async () => {
  const app = express();

  // CORS対策
  app.use(cors());

  // apollo起動
  await apolloServer.start();
  // ミドルウェアの結合
  apolloServer.applyMiddleware({
    app,
  });

  // mongoDB接続
  await mongoose
    .connect(MONGOURI)
    .then(() => console.log("MongoDB接続完了"))
    .catch((e) => console.log(e));

  try {
    // サーバー起動
    await app.listen(port);
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch {
    console.log("Not able to run GraphQL server");
  }
};

start();

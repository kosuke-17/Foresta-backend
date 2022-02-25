import { port } from "./config/environment";
import express from "express";
import apolloServer from "./graphql";

const start = async () => {
  const app = express();
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
  });
  try {
    await app.listen(port);
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch {
    console.log("Not able to run GraphQL server");
  }
};

start();

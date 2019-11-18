import typeDefinition from "./shemas";
import resolverObject from "./resolvers";
import { ApolloServer } from "apollo-server-express";
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const port = process.env.PORT || 9000;
const app = express();

app.use(bodyParser.json(), cors());
const server = new ApolloServer({
  typeDefs: typeDefinition,
  resolvers: resolverObject
});

// change srever path
server.applyMiddleware({ app, path: "/query" });

// The `listen` method launches a web server.

app.listen(port, () => console.log(`server is up and running ${port}`));

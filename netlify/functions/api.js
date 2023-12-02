const express = require("express");
const serverless = require("serverless-http");
const CORS = require("cors");
const { startServer } = require("../..");
const api = express();

api.use(CORS());
const router = express.Router();
//router.get("/hello", (req, res) => res.send("Hello World!"));
startServer(api);
const handler = serverless(api);
module.exports = { handler, api };

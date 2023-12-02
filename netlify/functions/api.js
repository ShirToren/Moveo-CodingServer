const express = require("express");
const serverless = require("serverless-http");
const CORS = require("cors");
const api = express();
api.use(CORS());
const router = express.Router();
//router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

const handler = serverless(api);
module.exports = { handler, api };

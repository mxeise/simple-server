"use strict";

const express = require("express");
const cors = require("cors");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.send({
    method: req.method,
    headers: req.headers,
    body: `Running on http://${HOST}:${PORT}`,
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

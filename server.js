const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello from ECS Fargate CI/CD! -version 2"));
app.get("/health", (req, res) => res.status(200).send("OK"));

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () =>
  console.log(`App running on port ${port}`)
);

const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swagger");


const authorsRouter = require("./routes/authorsRouter");
const postsRouter = require("./routes/postsRouter");

console.log(authorsRouter);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/authors", authorsRouter);
app.use("/posts", postsRouter);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, {
    explorer: true
  })
);

module.exports = app;
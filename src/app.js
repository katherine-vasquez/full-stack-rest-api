const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swagger");


const authorsRouter = require("./routes/authorsRouter");
const postsRouter = require("./routes/postsRouter");
const commentsRouter = require("./routes/commentsRouter");

const errorHandler = require("./middlewares/errorhandler");

console.log("TYPE OF errorHandler:", typeof errorHandler);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/authors", authorsRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, {
    explorer: true
  })
);


// =========================
// ERROR HANDLER (GLOBAL)
// =========================
app.use(errorHandler);

module.exports = app;

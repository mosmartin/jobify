import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  throw new Error("💩😅");
  res.send("Hello World!");
});

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`🚀 server listening on port ${port}...!`);
});

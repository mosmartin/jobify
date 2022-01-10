import express from "express";
import { notFound } from "./middleware/not-found.js";

const app = express();

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);

app.listen(port, () => {
  console.log(`🚀 server listening on port ${port}...!`);
});

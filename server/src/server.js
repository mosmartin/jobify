import express from 'express';
import dotenv from 'dotenv';
import { dbConn } from '../db/connect.js';
import { errorHandler } from './middleware/error-handler.js';
import { notFound } from './middleware/not-found.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  throw new Error('💩😅');
  res.send('Hello World!');
});

app.use(notFound);

app.use(errorHandler);

(async () => {
  try {
    await dbConn(process.env.MONGODB_URI);

    app.listen(port, () => {
      console.log(`🚀 server listening on port ${port}...!`);
    });
  } catch (err) {
    console.error(err);
  }
})();

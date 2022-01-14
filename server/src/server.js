import express from 'express';
import dotenv from 'dotenv';
import { dbConn } from '../db/connect.js';
import { errorHandler } from './middleware/error-handler.js';
import { notFound } from './middleware/not-found.js';
import authRouter from './routes/auth.routes.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.use('/api/v1/auth', authRouter);

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

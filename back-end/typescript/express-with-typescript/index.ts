import express from 'express';
import { StatusCodes } from 'http-status-codes';
import BookRouter from './routes/book';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(BookRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
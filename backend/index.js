import express from 'express';
import process from 'node:process';
import bodyParser from 'body-parser';
import cors from 'cors';

import { connect } from 'mongoose';
import userRouter from './routers/UserRouter.js'
import placeRouter from './routers/placeRouter.js'

const app = express();
const PORT = process.env.PORT || 3000;
app.set('port', PORT);
await connect('mongodb://127.0.0.1:27017/Wanderlist');

app.use(bodyParser.json());
app.use(cors());

app.use(userRouter);
app.use(placeRouter)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});

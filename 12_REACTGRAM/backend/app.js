import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
import db from './config/db.js';
import indexRouter from './routes/index.js';
import usersRouter from './api/User/user.routes.js'
dotenv.config()

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve('public')));
app.use(cors({credentials: true, origin: 'http://localhost:8080'}))

app.use('/', indexRouter);
app.use('/users', usersRouter);

db()
app.listen(port, () => {
  console.log(`Listen on port ${port}`)
})
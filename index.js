import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routes/users.js';

const app = express();

app.use(bodyParser.json());

//add prefix as /api to all the routes here 
app.use('/api', userRouter);



app.listen(3000, function () {
  console.log('Hey server is running at port 3000');
});

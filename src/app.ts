import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();

//Perser

app.use(express.json());
app.use(cors());

//applicaion routes

app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello world');
};

app.get('/', getAController);

// console.log(process.cwd());

export default app;

import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//will call contoller function

router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllstudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;

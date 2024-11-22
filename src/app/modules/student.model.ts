import { Schema, model, connect } from 'mongoose';
import { Student } from './student/student.interface';

const studetShema = new Schema<Student>({
  id: { type: String },
  name: {
    firstname: { type: String, required: true },
    middlename: { type: String },
    lastname: { type: String, required: true },
  },
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergenceyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],

  presentAddress: { type: String, required: true },
  permanentAdress: { type: String, required: true },

  guardian: {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
  },
  localGuardian: {
    firstname: { type: String, required: true },
    middlename: { type: String, required: true },
    lastname: { type: String, required: true },
  },
  profileImg: { type: String },
  isActive: ['active', 'block'],
});

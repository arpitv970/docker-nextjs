import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is requried!'],
  },
  email: {
    type: String,
    unique: [true, 'Email already existed!!!'],
    required: [true, 'Email is required!'],
  },
  address: {
    type: String,
    required: [true, 'Address is required!'],
  },
  dob: {
    type: Date,
    required: [true, 'DoB is required!'],
  },
  phone: {
    type: String,
    required: [true, 'Phone no. is required!'],
  },
});

const User = models.User || model('User', UserSchema);
export default User;

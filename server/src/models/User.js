import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide a first name'],
    minlength: [3, 'First name must be at least 3 characters'],
    maxlength: [20, 'First name must be at most 20 characters'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    validate: {
      validator: validator.isEmail,
      message: 'Email is not valid',
    },
    unique: true,
    // match: [
    //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    // ]
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Please provide a last name'],
    minlength: [3, 'Last name must be at least 3 characters'],
    maxlength: [20, 'Last name must be at most 20 characters'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Please provide a location'],
    minlength: [3, 'Location must be at least 3 characters'],
    maxlength: [20, 'Location must be at most 20 characters'],
    trim: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;

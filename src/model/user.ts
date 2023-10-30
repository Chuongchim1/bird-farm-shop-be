import mongoose, { Document, Model } from 'mongoose';

export interface UserDocument extends Document {
  // userID: string;
  username: string;
  email: string;
  password: string;
  admin: boolean;
  firstName: string;
  lastName: string;
  phone: number;
  Gender: boolean;
  address: string;
  dateOfBirth: Date;
  role: string;
}

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    require: true,
    minlength: 6,
    maxlength: 20,
    unique: true
  },
  email: {
    type: String,
    require: true,
    minlength: 10,
    maxlength: 50,
    unique: true
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  admin: {
    type: Boolean,
    default: false
  }
  ,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  Gender: {
    type: Boolean,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

const User: Model<UserDocument> = mongoose.model<UserDocument>('User', userSchema);

export default User;

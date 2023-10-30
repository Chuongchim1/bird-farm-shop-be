import mongoose, { Document, Model, Schema, Types } from 'mongoose';

export interface BirdDocument extends Document {
  // BirdID: string;
  birdName: string;
  age: number;
  typeID: Types.ObjectId;
  gender: boolean;
  status: boolean;
  fertility: boolean;
  healthCareID: Types.ObjectId;
  price: number;
  discription: string;
  images: string[];
  quantity: number;
}

const birdSchema: Schema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
  },
  typeID:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TypeOfBird',
  },

  gender: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  fertility: {
    type: String,
    required: true,
  },
  healthCareID:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HealthCareProffessional',
  },
  birdName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discription: {
    type: String,

  },
  images: [{
    type: String,
    required: true,
  }],
  quantity: {
    type: Number,
    require: true
  }
  



});

const Bird: Model<BirdDocument> = mongoose.model<BirdDocument>('Bird', birdSchema);

export default Bird;

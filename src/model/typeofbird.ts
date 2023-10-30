import mongoose, { Document, Model } from 'mongoose';

export interface TypeOfBirdDocument extends Document {
  // typeID: string;
  quantity: number;
  nameType: string;
}

const typeOfBirdSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true
  },
  nameType: {
    type: String,
    required: true
  }
});

const TypeOfBird: Model<TypeOfBirdDocument> = mongoose.model<TypeOfBirdDocument>('TypeOfBird', typeOfBirdSchema);

export default TypeOfBird;

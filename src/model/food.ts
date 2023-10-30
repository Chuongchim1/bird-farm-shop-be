import mongoose, { Document, Model } from 'mongoose';

export interface FoodDocument extends Document {
  foodID: string;
}

const foodSchema = new mongoose.Schema({
  foodID: {
    type: String,
    required: true
  }
});

const Food: Model<FoodDocument> = mongoose.model<FoodDocument>('Food', foodSchema);

export default Food;

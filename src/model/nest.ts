import mongoose, { Document, Model } from 'mongoose';

export interface NestDocument extends Document {
  nestID: string;
}

const nestSchema = new mongoose.Schema({
  nestID: {
    type: String,
    required: true
  }
});

const Nest: Model<NestDocument> = mongoose.model<NestDocument>('Nest', nestSchema);

export default Nest;

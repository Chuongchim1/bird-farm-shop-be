import mongoose, { Document, Model, Types } from 'mongoose';

export interface NewsDocument extends Document {
  // newID: string;
  title: string;
  image: string;
  content: string;
  date: Date;
  SellerID: Types.ObjectId[];
}

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  SellerID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller'
    }
  ]
});

const News: Model<NewsDocument> = mongoose.model<NewsDocument>('News', newsSchema);

export default News;

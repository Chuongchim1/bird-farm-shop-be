import mongoose, { Document, Model } from 'mongoose';

export interface ProductDocument extends Document {
  // productID: string;
  productName: string;
  price: number;
  discription: string;
  typeOfProduct: string;
  images: string;
  quanlity: string;
  rating: string;
  feedback: string;
}

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discription: {
    type: String,
    required: true
  },
  typeOfProduct: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  },
  quanlity: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  }
});

const Product: Model<ProductDocument> = mongoose.model<ProductDocument>('Product', productSchema);

export default Product;

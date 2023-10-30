import mongoose, { Document, Model } from 'mongoose';

export interface ProductManagerDocument extends Document {
  productManagerID: string;
}

const productManagerSchema = new mongoose.Schema({
  productManagerID: {
    type: String,
    required: true
  }
});

const ProductManager: Model<ProductManagerDocument> = mongoose.model<ProductManagerDocument>('ProductManager', productManagerSchema);

export default ProductManager;

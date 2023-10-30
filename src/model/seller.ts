import mongoose, { Document, Model, Types } from 'mongoose';

export interface SellerDocument extends Document {
  // sellerID: string;
  orderID: Types.ObjectId[];
}

const sellerSchema = new mongoose.Schema({
  orderID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }
  ]
});

const Seller: Model<SellerDocument> = mongoose.model<SellerDocument>('Seller', sellerSchema);

export default Seller;

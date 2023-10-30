import mongoose, { Document, Model, Types } from 'mongoose';

export interface CustomerDocument extends Document {
  // customerID: string;
  numberCancelOrder: number;
  SellerID: Types.ObjectId[];
}

const customerSchema = new mongoose.Schema({
  numberCancelOrder: {
    type: Number,
    required: true
  },
  SellerID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller'
    }
  ]
});

const Customer: Model<CustomerDocument> = mongoose.model<CustomerDocument>('Customer', customerSchema);

export default Customer;

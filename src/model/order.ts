import mongoose, { Document, Model, Types } from 'mongoose';

export interface OrderDocument extends Document {
  // orderID: string;
  customerID: Types.ObjectId;
  description: string;
  customerName: string;
  customerPhone: number;
  customerAddress: string;
  customerEmail: string;
  amount: number;
  date: Date;
  orderStatus: string;
  listProduct: Types.ObjectId[]
}

const orderSchema = new mongoose.Schema({
  customerID: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    }
  ,
  description: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  customerPhone: {
    type: Number,
    required: true
  },
  customerAddress: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  orderStatus: {
    type: String,
    required: true
  },
  listProduct: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bird'
  }]
});

const Order: Model<OrderDocument> = mongoose.model<OrderDocument>('Order', orderSchema);

export default Order;

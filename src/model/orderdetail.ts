import mongoose, { Document, Model, Types } from 'mongoose';

export interface OrderDetailDocument extends Document {
  // orderDetailID: string;
  productID: Types.ObjectId[];
  orderID: Types.ObjectId[];
}

const orderDetailSchema = new mongoose.Schema({
  productID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  orderID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }
  ]
});

const OrderDetail: Model<OrderDetailDocument> = mongoose.model<OrderDetailDocument>('OrderDetail', orderDetailSchema);

export default OrderDetail;

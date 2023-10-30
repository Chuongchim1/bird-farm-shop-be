import mongoose, { Document, Model, Types } from 'mongoose';

interface OrderVoucherDocument extends Document {
  orderID: Types.ObjectId[];
  voucherID: Types.ObjectId[];
}

const orderVoucherSchema = new mongoose.Schema({
  orderID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }
  ],
  voucherID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Voucher'
    }
  ]
});

const OrderVoucher: Model<OrderVoucherDocument> = mongoose.model<OrderVoucherDocument>('OrderVoucher', orderVoucherSchema);

export default OrderVoucher;

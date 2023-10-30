import mongoose, { Document, Model, Types } from 'mongoose';

export interface PaymentDocument extends Document {
  // paymentID: string;
  orderID: Types.ObjectId[];
  typeOfPayment: string;
  gateWayID: Types.ObjectId[];
}

const paymentSchema = new mongoose.Schema({
  orderID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }
  ],
  typeOfPayment: {
    type: String,
    required: true
  },
  gateWayID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'GateWay'
    }
  ]
});

const Payment: Model<PaymentDocument> = mongoose.model<PaymentDocument>('Payment', paymentSchema);

export default Payment;

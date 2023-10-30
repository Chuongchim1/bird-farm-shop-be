import mongoose, { Document, Model, Types } from 'mongoose';

export interface InvoiceDocument extends Document {
  // invoiceId: string;
  paymentID: Types.ObjectId[];
  invoiceStatus: string;
  date: Date;
}

const invoiceSchema = new mongoose.Schema({
  paymentID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payment'
    }
  ],
  invoiceStatus: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const Invoice: Model<InvoiceDocument> = mongoose.model<InvoiceDocument>('Invoice', invoiceSchema);

export default Invoice;

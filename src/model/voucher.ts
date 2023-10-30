import mongoose, { Document, Model } from 'mongoose';

export interface VoucherDocument extends Document {
  // voucherID: string;
  voucherName: string;
  startDate: string;
  endDate: string;
  value: number;
  SellerID: mongoose.Schema.Types.ObjectId[];
}

const voucherSchema = new mongoose.Schema({
  voucherName: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  SellerID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
    },
  ]
});

const Voucher: Model<VoucherDocument> = mongoose.model<VoucherDocument>('Voucher', voucherSchema);

export default Voucher;

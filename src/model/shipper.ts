import mongoose, { Document, Model } from 'mongoose';

export interface ShipperDocument extends Document {
  shipperID: string;
}

const shipperSchema = new mongoose.Schema({
  shipperID: {
    type: String,
    required: true
  }
});

const Shipper: Model<ShipperDocument> = mongoose.model<ShipperDocument>('Shipper', shipperSchema);

export default Shipper;

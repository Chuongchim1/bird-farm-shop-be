import mongoose, { Document, Model } from 'mongoose';

export interface GateWayDocument extends Document {
  // gateWayID: string;
  gateWayName: string;
  gateWayStatus: string;
}

const gateWaySchema = new mongoose.Schema({
  gateWayName: {
    type: String,
    required: true
  },
  gateWayStatus: {
    type: String,
    required: true
  }
});

const GateWay: Model<GateWayDocument> = mongoose.model<GateWayDocument>('GateWay', gateWaySchema);

export default GateWay;

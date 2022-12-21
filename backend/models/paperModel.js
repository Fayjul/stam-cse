import mongoose from 'mongoose';

const paperSchema = new mongoose.Schema(
  {
    paperName: { type: String, required: true },
    pdf: { type: String, required: true },
    topic: { type: String, required: true },
    batch: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Paper = mongoose.model('Paper', paperSchema);
export default Paper;

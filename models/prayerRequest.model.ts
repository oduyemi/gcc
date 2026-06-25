import mongoose, { Schema, Document, Types } from "mongoose";


export interface IPrayerRequest extends Document {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  phone: string;
  request: string;
  status: "pending" | "treated";
  createdAt: Date;
}


const prayerSchema = new Schema<IPrayerRequest>(
  {
    fullname: { type: String, required: true },
    email: {
        type: String,
        index: true,
        lowercase: true,
        trim: true,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    phone: { type: String, required: true },
    request: { type: String, required: true },
    status: { 
      type: String, 
      enum: ["pending", "treated"],
  }
  },
  { timestamps: true }
);

const PrayerRequest = mongoose.models.PrayerRequest || mongoose.model<IPrayerRequest>("PrayerRequest", prayerSchema);
export default PrayerRequest
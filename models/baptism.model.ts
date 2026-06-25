import mongoose, { Schema, Document, Types } from "mongoose";


export interface IBaptism extends Document {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  phone: string;
  hasAcceptedJesus: boolean;
  testimony?: string;
  reason: string;
  status: "pending" | "treated";
  createdAt: Date;
}


const baptismSchema = new Schema<IBaptism>(
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
    hasAcceptedJesus: { type: Boolean, default: false },
    testimony: { type: String, default: "" },
    reason: { type: String, required: true },
    status: { 
      type: String, 
      enum: ["pending", "treated"],
      default:"pending"
  },
  },
  { timestamps: true }
);

const Baptism = mongoose.models.Baptism || mongoose.model<IBaptism>("Baptism", baptismSchema);
export default Baptism
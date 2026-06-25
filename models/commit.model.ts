import mongoose, { Schema, Document, Types } from "mongoose";


export interface ICommit extends Document {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  phone: string;
  reason: string;
  status: "pending" | "treated";
  createdAt: Date;
}


const commitSchema = new Schema<ICommit>(
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
    reason: { type: String, required: true },
    status: { 
      type: String, 
      enum: ["pending", "treated"],
  }
  },
  { timestamps: true }
);

const Commit = mongoose.models.Commit || mongoose.model<ICommit>("Commit", commitSchema);
export default Commit
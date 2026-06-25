import mongoose, { Schema, Document, Types } from "mongoose";


export interface INewToChurch extends Document {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  phone: string;
  about: string;
  interest: "smallgroups"| "youngadults" | "families" | "men" | "women";
  status: "pending" | "treated";
  createdAt: Date;
}


const newSchema = new Schema<INewToChurch>(
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
    interest: { 
        type: String, 
        enum: ["smallgroups", "youngadults", "families", "men", "women"],
    },
    status: { 
      type: String, 
      enum: ["pending", "treated"],
      default:"pending"
  },
  },
  { timestamps: true }
);

const NewToChurch = mongoose.models.NewToChurch || mongoose.model<INewToChurch>("NewToChurch", newSchema);
export default NewToChurch
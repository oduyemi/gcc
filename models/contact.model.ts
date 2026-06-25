import mongoose, { Schema, Document, Types } from "mongoose";


export interface IContact extends Document {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  topic: "general"| "prayer" | "first time" | "counselling" | "ministry information";
  subject: string;
  message: string;
  status: "pending" | "treated";
  createdAt: Date;
}


const contactSchema = new Schema<IContact>(
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
    topic: { 
        type: String, 
        enum: ["general", "prayer", "first time", "counselling", "ministry information"],
    },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { 
      type: String, 
      enum: ["pending", "treated"],
      default:"pending"
  },
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);
export default Contact
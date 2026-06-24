import mongoose, { Schema, Document, Types } from "mongoose";


export interface IRecommit extends Document {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  phone: string;
  support: string;
  createdAt: Date;
}


const recommitSchema = new Schema<IRecommit>(
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
    support: { type: String, required: true },
  },
  { timestamps: true }
);

const Recommit = mongoose.models.Recommit || mongoose.model<IRecommit>("Recommit", recommitSchema);
export default Recommit
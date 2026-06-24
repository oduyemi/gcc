import mongoose, { Schema, Document, Types } from "mongoose";


export interface ICounselling extends Document {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  phone: string;
  support: string;
  createdAt: Date;
}


const counsellingSchema = new Schema<ICounselling>(
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

const Counselling = mongoose.models.Counselling || mongoose.model<ICounselling>("Counselling", counsellingSchema);
export default Counselling
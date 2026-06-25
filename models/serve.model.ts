import mongoose, { Schema, Document, Types } from "mongoose";


export interface IServe extends Document {
  _id: Types.ObjectId;
  fullname: string;
  email: string;
  phone: string;
  about: string;
  interest: "welcometeam" | "children" | "gatekeepers" | "hospitality" | "media" | "outreach" | "protocol" | "sanctuary" | "socialmedia" | "technical" | "ushers" | "worship";
  reason: string;
  status: "pending" | "treated";
  createdAt: Date;
}


const serveSchema = new Schema<IServe>(
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
    about: { type: String, required: true },
    interest: { 
        type: String, 
        enum: ["welcometeam", "children", "gatekeepers", "hospitality", "media","outreach", "protocol", "sanctuary", "socialmedia", "technical","ushers","worship"],
    },
    reason: { type: String, required: true },
    status: { 
      type: String, 
      enum: ["pending", "treated"],
      default:"pending"
  }
  },
  { timestamps: true }
);

const Serve = mongoose.models.Serve || mongoose.model<IServe>("Serve", serveSchema);
export default Serve
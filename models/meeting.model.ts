import mongoose, { Schema, Document } from "mongoose";

export type MeetingType = "recurring" | "special";

export type MeetingFrequency = "weekly" | "monthly";

export type WeekOfMonth =
  | "first"
  | "second"
  | "third"
  | "fourth"
  | "last";

export interface IMeeting extends Document {
  title: string;
  description?: string;
  category: "service" | "prayer" | "fellowship" | "special"
  type: MeetingType;
  frequency?: MeetingFrequency;
  // 0 = Sunday, 6 = Saturday
  dayOfWeek?: number;
  weekOfMonth?: WeekOfMonth;
  startDate?: Date;
  endDate?: Date;
  image?: string;
  time?: string;
  isOnline: boolean;
  location?: string;
  meetingLink?: string;
  isActive: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}


const meetingSchema = new Schema<IMeeting>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    category: {
        type: String,
        enum: [
            "service",
            "prayer",
            "fellowship",
            "special"
        ]
    },
    

    type: {
      type: String,
      enum: ["recurring", "special"],
      required: true,
    },

    frequency: {
      type: String,
      enum: ["weekly", "monthly"],
    },

    dayOfWeek: {
      type: Number,
      min: 0,
      max: 6,
    },

    weekOfMonth: {
      type: String,
      enum: ["first", "second", "third", "fourth", "last"],
    },

    startDate: Date,

    endDate: Date,

    image: {
        type: String,
        trim: true,
    },

    time: String,

    location: String,

    isOnline: {
      type: Boolean,
      default: false,
    },

    meetingLink: String,

    isActive: {
      type: Boolean,
      default: true,
    },

    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Meeting =
  mongoose.models.Meeting ||
  mongoose.model<IMeeting>("Meeting", meetingSchema);

export default Meeting;



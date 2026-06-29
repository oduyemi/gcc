import mongoose, {
    Schema,
    Document,
    Types,
  } from "mongoose";
  
  export interface IQuarterEvent extends Document {
    meeting?: Types.ObjectId;
  
    title: string;
  
    description?: string;
  
    category:
      | "service"
      | "prayer"
      | "fellowship"
      | "special";
  
    date: Date;
  
    endDate?: Date;
  
    time?: string;
  
    image?: string;
  
    isOnline: boolean;
  
    location?: string;
  
    meetingLink?: string;
  
    isRecurring: boolean;
  
    createdAt: Date;
  
    updatedAt: Date;
  }
  
  const quarterEventSchema = new Schema<IQuarterEvent>(
    {
      meeting: {
        type: Schema.Types.ObjectId,
        ref: "Meeting",
      },
  
      title: {
        type: String,
        required: true,
        trim: true,
      },
  
      description: String,
  
      category: {
        type: String,
        enum: [
          "service",
          "prayer",
          "fellowship",
          "special",
        ],
        required: true,
      },
  
      date: {
        type: Date,
        required: true,
      },
  
      endDate: Date,
  
      time: String,
  
      image: String,
  
      isOnline: {
        type: Boolean,
        default: false,
      },
  
      location: String,
  
      meetingLink: String,
  
      isRecurring: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const QuarterEvent =
    mongoose.models.QuarterEvent ||
    mongoose.model<IQuarterEvent>(
      "QuarterEvent",
      quarterEventSchema
    );
  
  export default QuarterEvent;
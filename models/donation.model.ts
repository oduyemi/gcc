import mongoose, {Document, Schema} from "mongoose";
  

  export interface IDonation extends Document {
    orderID: string;
    captureID?: string;
    referenceID?: string;
    amount: number;
    currency: "GBP";
    status:
      | "CREATED"
      | "PENDING"
      | "COMPLETED"
      | "DENIED"
      | "REFUNDED"
      | "REVERSED";
    payerID?: string;
    payerEmail?: string;
    payerGivenName?: string;
    payerSurname?: string
    paypalCreateTime?: Date;
    paypalUpdateTime?: Date
    createdAt: Date;
    updatedAt: Date;
  }
  
  const DonationSchema =
    new Schema<IDonation>(
      {
        orderID: {
          type: String,
          required: true,
          unique: true,
          index: true,
        },
  
        captureID: {
          type: String,
          unique: true,
          sparse: true,
          index: true,
        },
  
        referenceID: {
          type: String,
          index: true,
        },
  
        amount: {
          type: Number,
          required: true,
          min: 0.01,
        },
  
        currency: {
          type: String,
          enum: ["GBP"],
          default: "GBP",
          required: true,
        },
  
        status: {
          type: String,
          enum: [
            "CREATED",
            "PENDING",
            "COMPLETED",
            "DENIED",
            "REFUNDED",
            "REVERSED",
          ],
          default: "CREATED",
          index: true,
        },
  
        payerID: String,
  
        payerEmail: String,
  
        payerGivenName: String,
  
        payerSurname: String,
  
        paypalCreateTime: Date,
  
        paypalUpdateTime: Date,
      },
  
      {
        timestamps: true,
      }
    );
  
  export default mongoose.models.Donation || mongoose.model<IDonation>("Donation", DonationSchema);
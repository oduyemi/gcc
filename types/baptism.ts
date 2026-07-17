export interface BaptismEntry {
    _id: string;
    fullname: string;
    email: string;
    phone: string;
    hasAcceptedJesus: boolean;
    testimony?: string;
    reason: string;
    status: "pending" | "treated";
    treatedAt?: string;
    treatedBy?: {
      _id: string;
      fname: string;
      lname: string;
      role: string;
    };
    createdAt: string;
    updatedAt: string;
  }
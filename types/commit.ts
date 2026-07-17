export interface CommitEntry {
    _id: string;
    fullname: string;
    email: string;
    phone: string;
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
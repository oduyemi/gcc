export interface ContactTreatedBy {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  role: "admin" | "user";
}

export interface ContactEntry {
  _id: string;
  fullname: string;
  email: string;
  topic: string;
  subject: string;
  message: string;
  status: "pending" | "treated";
  treatedAt?: string;
  treatedBy?: ContactTreatedBy;
  createdAt: string;
  updatedAt: string;
}
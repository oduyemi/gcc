export interface AdminUser {
    _id: string;
    fname: string;
    lname: string;
    email: string;
    role: "admin";
    createdAt?: Date;
    firstLogin?: boolean;
  }
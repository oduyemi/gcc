export type MeetingCategory =
  | "service"
  | "prayer"
  | "fellowship"
  | "special";

export type MeetingType =
  | "recurring"
  | "special";

export type MeetingFrequency =
  | "weekly"
  | "monthly";

export type WeekOfMonth =
  | "first"
  | "second"
  | "third"
  | "fourth"
  | "last";

export interface Meeting {
  _id: string;

  title: string;

  description?: string;

  location?: string;

  category: MeetingCategory;

  type: MeetingType;

  frequency?: MeetingFrequency;

  dayOfWeek?: number;

  weekOfMonth?: WeekOfMonth;

  startDate?: string;

  endDate?: string;

  time?: string;

  image?: string;

  imagePublicId?: string;

  meetingLink?: string;

  isOnline: boolean;

  isActive: boolean;

  sortOrder: number;

  nextOccurrence?: string;

  createdAt?: string;

  updatedAt?: string;
}
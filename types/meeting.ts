export interface Meeting {
    _id: string;
    title: string;
    description?: string;
    location?: string;
  
    type: string;
    frequency: string;
  
    dayOfWeek?: number;
    weekOfMonth?: number;
  
    startDate?: string;
  
    sortOrder?: number;
    active?: boolean;
  
    nextOccurrence?: string;
  }
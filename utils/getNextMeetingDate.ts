export function getNextMeetingDate(meeting: {
    type: string;
    frequency?: string;
    dayOfWeek?: number;
    weekOfMonth?: string;
    startDate?: string;
  }) {
    // Special one-time event
    if (meeting.type === "special" && meeting.startDate) {
      return new Date(meeting.startDate);
    }
  
    const today = new Date();
  
    // Weekly meetings
    if (
      meeting.frequency === "weekly" &&
      meeting.dayOfWeek !== undefined
    ) {
      const result = new Date(today);
  
      const currentDay = today.getDay();
  
      let daysUntil =
        (meeting.dayOfWeek - currentDay + 7) % 7;
  
      if (daysUntil === 0) {
        daysUntil = 7;
      }
  
      result.setDate(today.getDate() + daysUntil);
  
      return result;
    }
  
    // Monthly meetings
    if (
      meeting.frequency === "monthly" &&
      meeting.dayOfWeek !== undefined &&
      meeting.weekOfMonth
    ) {
      return getNextMonthlyOccurrence(
        meeting.dayOfWeek,
        meeting.weekOfMonth
      );
    }
  
    return null;
  }
  
  function getNextMonthlyOccurrence(
    dayOfWeek: number,
    weekOfMonth: string
  ) {
    const today = new Date();
  
    let year = today.getFullYear();
    let month = today.getMonth();
  
    let occurrence = findOccurrence(
      year,
      month,
      dayOfWeek,
      weekOfMonth
    );
  
    if (occurrence < today) {
      month++;
  
      if (month > 11) {
        month = 0;
        year++;
      }
  
      occurrence = findOccurrence(
        year,
        month,
        dayOfWeek,
        weekOfMonth
      );
    }
  
    return occurrence;
  }
  
  function findOccurrence(
    year: number,
    month: number,
    dayOfWeek: number,
    weekOfMonth: string
  ) {
    const occurrences: Date[] = [];
  
    const lastDay = new Date(
      year,
      month + 1,
      0
    ).getDate();
  
    for (let day = 1; day <= lastDay; day++) {
      const date = new Date(year, month, day);
  
      if (date.getDay() === dayOfWeek) {
        occurrences.push(date);
      }
    }
  
    switch (weekOfMonth) {
      case "first":
        return occurrences[0];
  
      case "second":
        return occurrences[1];
  
      case "third":
        return occurrences[2];
  
      case "fourth":
        return occurrences[3];
  
      case "last":
        return occurrences[occurrences.length - 1];
  
      default:
        return occurrences[0];
    }
  }
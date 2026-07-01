export const getNextSunday = () => {
    const today = new Date();
  
    const nextSunday = new Date(today);
  
    const daysUntilSunday = (7 - today.getDay()) % 7;
  
    nextSunday.setDate(
      today.getDate() + (daysUntilSunday === 0 ? 7 : daysUntilSunday)
    );
  
    return nextSunday;
  };


  export const getCountdown = () => {
    const target = new Date(getNextSunday());
  
    // Sunday 10:30 AM
    target.setHours(10, 30, 0, 0);
  
    const diff = target.getTime() - Date.now();
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const seconds = Math.floor(
      (diff % (1000 * 60)) /
        1000
    );
  
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };
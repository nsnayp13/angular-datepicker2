/**
 * Date utility functions for angular-datepicker2
 * Replaces Date prototype extensions for better compatibility
 */
export class DateUtils {
  
  static adjustDate(date: Date, num: number = 0): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + num);
    return newDate;
  }

  /** Adjust month and set date to 1 */
  static adjustMonth(date: Date, num: number = 0): Date {
    const newDate = new Date(date);
    newDate.setDate(1);
    newDate.setMonth(newDate.getMonth() + num);
    return newDate;
  }

  /** Adjust year, set month to 0 and date to 1 */
  static adjustYear(date: Date, num: number = 0): Date {
    const newDate = new Date(date);
    newDate.setDate(1);
    newDate.setMonth(0);
    newDate.setFullYear(newDate.getFullYear() + num);
    return newDate;
  }

  static getDayWithStart(date: Date, start: number): number {
    const newDate = new Date(date.getTime());
    let day = newDate.getDay();
    day = day - start;
    if (day < 0) {
      day = 7 + day;
    }
    return day;
  }

  static getFirstDateDay(date: Date, start: number): number {
    const newDate = new Date(date.getTime());
    newDate.setDate(1);
    return DateUtils.getDayWithStart(newDate, start);
  }

  /**
   * Compare two dates ignoring time (only year, month, day)
   */
  static isSameDay(date1: Date, date2: Date): boolean {
    if (!date1 || !date2) return false;
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  /**
   * Compare two dates ignoring time and day (only year, month)
   */
  static isSameMonth(date1: Date, date2: Date): boolean {
    if (!date1 || !date2) return false;
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth()
    );
  }

  /**
   * Compare two dates ignoring time, day and month (only year)
   */
  static isSameYear(date1: Date, date2: Date): boolean {
    if (!date1 || !date2) return false;
    return date1.getFullYear() === date2.getFullYear();
  }

  /**
   * Normalize date to start of day (00:00:00.000)
   */
  static normalizeToDay(date: Date): Date {
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0);
    return normalized;
  }

  /**
   * Check if date is in array of dates (comparing only day, month, year)
   */
  static isDateInArray(date: Date, dates: Date[]): boolean {
    if (!date || !dates || dates.length === 0) return false;
    return dates.some(d => DateUtils.isSameDay(date, d));
  }
}
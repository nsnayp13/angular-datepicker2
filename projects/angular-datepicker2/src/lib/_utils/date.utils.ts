/**
 * Date utility functions for angular-datepicker2
 * Replaces Date prototype extensions for better compatibility
 */
export class DateUtils {
  
  static adjustDate(date: Date, num: number = 0): Date {
    // Use timezone-safe date creation
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + num,
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    );
  }

  /** Adjust month and set date to 1 */
  static adjustMonth(date: Date, num: number = 0): Date {
    // Use timezone-safe date creation
    return new Date(
      date.getFullYear(),
      date.getMonth() + num,
      1,
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    );
  }

  /** Adjust year, set month to 0 and date to 1 */
  static adjustYear(date: Date, num: number = 0): Date {
    // Use timezone-safe date creation
    return new Date(
      date.getFullYear() + num,
      0,
      1,
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    );
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
    // Create first day of month using timezone-safe method
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    return DateUtils.getDayWithStart(firstDayOfMonth, start);
  }

  /**
   * Compare two dates ignoring time (only year, month, day)
   * Works correctly across all timezones by comparing date components directly
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
   * Works correctly across all timezones by comparing date components directly
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
   * Works correctly across all timezones by comparing date components directly
   */
  static isSameYear(date1: Date, date2: Date): boolean {
    if (!date1 || !date2) return false;
    return date1.getFullYear() === date2.getFullYear();
  }

  /**
   * Create a new Date object representing the start of the day for the given date
   * Uses date components directly to avoid timezone issues
   */
  static normalizeToDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  /**
   * Check if date is in array of dates (comparing only day, month, year)
   * Works correctly across all timezones
   */
  static isDateInArray(date: Date, dates: Date[]): boolean {
    if (!date || !dates || dates.length === 0) return false;
    return dates.some(d => DateUtils.isSameDay(date, d));
  }

  /**
   * Compare two dates by day, ignoring time
   * Returns: -1 if date1 < date2, 0 if equal, 1 if date1 > date2
   * Works correctly across all timezones
   */
  static compareDays(date1: Date, date2: Date): number {
    const normalized1 = DateUtils.normalizeToDay(date1);
    const normalized2 = DateUtils.normalizeToDay(date2);
    
    if (normalized1.getTime() < normalized2.getTime()) return -1;
    if (normalized1.getTime() > normalized2.getTime()) return 1;
    return 0;
  }

  /**
   * Check if date1 is before date2 (by day, ignoring time)
   * Works correctly across all timezones
   */
  static isDayBefore(date1: Date, date2: Date): boolean {
    return DateUtils.compareDays(date1, date2) < 0;
  }

  /**
   * Check if date1 is after date2 (by day, ignoring time)
   * Works correctly across all timezones
   */
  static isDayAfter(date1: Date, date2: Date): boolean {
    return DateUtils.compareDays(date1, date2) > 0;
  }

  /**
   * Check if date is between startDate and endDate (inclusive, by day)
   * Works correctly across all timezones
   */
  static isDayBetween(date: Date, startDate: Date, endDate: Date): boolean {
    return DateUtils.compareDays(date, startDate) >= 0 && 
           DateUtils.compareDays(date, endDate) <= 0;
  }
}
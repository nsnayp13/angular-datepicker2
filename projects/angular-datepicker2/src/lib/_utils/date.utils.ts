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

  static getYmd(date: Date): string {
    return (
      date.getFullYear().toString() +
      String(date.getMonth().toString()).padStart(2, "0") +
      String(date.getDate().toString()).padStart(2, "0")
    );
  }
}
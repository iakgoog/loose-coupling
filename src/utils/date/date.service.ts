import IDateUtil from "./date.util.interface";

export default class DateService {
  constructor(protected dateUtil: IDateUtil) {}

  public formatFullDateTime(date?: string | Date): string {
    return this.dateUtil.formatFullDateTime(date);
  }

  public formatShortDateTime(date?: string | Date): string {
    return this.dateUtil.formatShortDateTime(date);
  }

  public isAfter(target: string | Date): boolean {
    return this.dateUtil.isAfter(target);
  }
}
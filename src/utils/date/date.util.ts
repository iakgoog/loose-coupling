import IDateUtil from './date.util.interface'
import dateLib from './lib/date.lib';

class DateUtil implements IDateUtil {
  public formatFullDateTime(date?: string | Date | undefined): string {
    return dateLib.formatFullDateTime(date);
  }

  public formatShortDateTime(date?: string | Date | undefined): string {
    return dateLib.formatShortDateTime(date);;
  }

  public isAfter(target: string | Date): boolean {
    return dateLib.isAfter(target);
  }

}

export default new DateUtil();

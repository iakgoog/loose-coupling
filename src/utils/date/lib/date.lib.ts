import dayjsLib from './dayjs/date.lib.dayjs';

class DateLib {

  constructor() {}

  public formatFullDateTime(date?: string | Date | undefined): string {
    return dayjsLib.formatFullDateTime(date);
  }
  
  public formatShortDateTime(date?: string | Date | undefined): string {
    return dayjsLib.formatShortDateTime(date);
  }
  
  public isAfter(target: string | Date): boolean {
    return dayjsLib.isAfter(target);
  }

}

export default new DateLib();

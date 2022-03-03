import IDateUtil from './date.util.interface';

import dayjs from 'dayjs';

class DateUtil implements IDateUtil {
    public formatFullDateTime(date?: string | Date): string {
      // implementation details;
      return dayjs(date).format('DD-MM-YYYY HH:mm:ss');
    }

  formatShortDateTime: (date?: string | Date) => string;
  isAfter: (target: string | Date) => boolean;
  
}

export default new DateUtil();

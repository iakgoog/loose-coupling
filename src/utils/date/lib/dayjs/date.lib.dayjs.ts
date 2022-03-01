import dayjs from 'dayjs';

class DayjsLib {

  constructor() {}

  public formatFullDateTime(date?: string | Date | undefined): string {
    return dayjs(date).format('DD-MM-YYYY HH:mm:ss');
  }

  public formatShortDateTime(date?: string | Date | undefined): string {
    return dayjs(date).format('DD-MM-YYYY');
  }

  public isAfter(target: string | Date): boolean {
    return dayjs().isAfter(dayjs(target));
  }

}

export default new DayjsLib();

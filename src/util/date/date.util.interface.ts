export default interface IDateUtil {
  formatFullDateTime: (date?: string | Date) => string;
  formatShortDateTime: (date?: string | Date) => string;
  isAfter: (target: string | Date) => boolean;
};

export const getDayOfWeek = (dateString: string): string => {
  const date = new Date(dateString);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return days[date.getDay()];
};

export const formatDateWritten = (
  dateString: string,
  localeOverride?: string | undefined | null,
): string => {
  let locale = 'en-US';

  if (localeOverride) {
    locale = localeOverride;
  }

  const date = new Date(dateString);
  const opts: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  return date.toLocaleDateString(locale, opts);
};

export const isDateValid = (dateString: string): boolean => {
  if (isNaN(Date.parse(dateString))) return false;
  return true;
};

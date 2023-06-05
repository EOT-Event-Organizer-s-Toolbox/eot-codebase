export const getDayOfWeek = (dateString: string): string => {
  const date = new Date(dateString);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return days[date.getDay()];
};

export const formatDateWritten = (
  dateString: string,
  localeString?: string | undefined | null,
): string => {
  let locale = 'en-US';

  if (localeString) {
    locale = localeString;
  }

  const date = new Date(dateString);
  const opts: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  return date.toLocaleDateString(locale, opts);
};

import { DateTime } from 'luxon';

const timeFrom = (time) => {
  const date = new Date(time);
  const dt = DateTime.fromJSDate(date);
  const timeAgo = dt.toRelativeCalendar();
  return timeAgo;
};

export { timeFrom };

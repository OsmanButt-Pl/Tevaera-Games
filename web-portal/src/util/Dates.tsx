export const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// format a JavaScript Date into Month (name) Day (number), Year
export const dateFormat = (date: Date): string => {
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

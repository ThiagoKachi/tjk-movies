export const getYear = (date: string) => {
  const year = date.split('-')[0];
  return year;
};
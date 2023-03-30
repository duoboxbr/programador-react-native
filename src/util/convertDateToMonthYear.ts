export const formatDate = (date: string): string => {
  const [year, month] = date.split('-');
  return `${month}/${year}`;
};

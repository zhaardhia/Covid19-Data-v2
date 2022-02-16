export const delimiter = (value) => {
  const formatter = new Intl.NumberFormat('id-ID');
  return formatter.format(value).replace(/,00/, '');
};
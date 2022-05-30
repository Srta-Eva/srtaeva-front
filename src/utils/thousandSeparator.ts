const ThousanSeparator = (value: number, separator = '.'): string => {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export default ThousanSeparator;

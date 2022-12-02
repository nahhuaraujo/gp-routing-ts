export const firstLetterToUpperCase = (string = '') => {
  return string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1);
};

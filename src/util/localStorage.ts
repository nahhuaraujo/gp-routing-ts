export const setLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

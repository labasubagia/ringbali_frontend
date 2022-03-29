export const getImageUrl = (url: string) => {
  return `${import.meta.env.VITE_URL}${url}`;
};

export const getAssetPath = (path: string): string => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}/${path}`;
}; 
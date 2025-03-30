/**
 * Utilities for handling asset paths with the configured Vite base URL
 */

/**
 * Returns a path prefixed with the current Vite base URL
 * @param path Asset path (should not start with a slash)
 * @returns Full path including base URL
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}; 
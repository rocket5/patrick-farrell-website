/**
 * Get the base path for assets based on environment
 * In production (GitHub Pages), assets need to be prefixed with the repo name
 * In development, no prefix is needed
 */
export function getBasePath(): string {
  return process.env.NODE_ENV === 'production' ? '/patrick-farrell-website' : '';
}

/**
 * Prefix a path with the basePath if in production
 * @param path - The path to prefix (should start with /)
 * @returns The prefixed path
 */
export function withBasePath(path: string): string {
  const basePath = getBasePath();
  return `${basePath}${path}`;
}

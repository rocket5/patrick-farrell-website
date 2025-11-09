/**
 * Get the base path for assets
 * Since we're using a custom domain (patrickfarrell.ca), no basePath is needed
 * @returns Empty string (no prefix)
 */
export function getBasePath(): string {
  return '';
}

/**
 * Returns the path unchanged (no basePath needed for custom domains)
 * @param path - The path to return
 * @returns The same path
 */
export function withBasePath(path: string): string {
  return path;
}

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

export function getImageUrl(path: string): string {
  // If path already starts with http, return as-is
  if (path.startsWith("http")) {
    return path;
  }
  // Remove leading slash if present for consistent joining
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return IMAGE_BASE_URL ? `${IMAGE_BASE_URL}/${cleanPath}` : `/${cleanPath}`;
}

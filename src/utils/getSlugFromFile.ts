export const getSlug = (path: string) => {
  return path.substring(path.lastIndexOf('/') + 1).replace('.md', '');
};

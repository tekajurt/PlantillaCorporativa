import blurMap from './blur-placeholders.json';

const TRANSPARENT_GIF = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';

export function getBlur(path) {
  if (!path) return TRANSPARENT_GIF;
  return blurMap[path] || TRANSPARENT_GIF;
}

export default getBlur;

import getBlur from '../lib/getBlur';
import blurMap from '../lib/blur-placeholders.json';

describe('getBlur helper', () => {
  it('returns blurDataURL for known path', () => {
    const path = Object.keys(blurMap)[0];
    const result = getBlur(path);
    expect(typeof result).toBe('string');
    expect(result).toBe(blurMap[path]);
  });

  it('returns transparent GIF for unknown or falsy path', () => {
    const fallback = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
    expect(getBlur('/non-existent.png')).toBe(fallback);
    expect(getBlur('')).toBe(fallback);
    expect(getBlur(null)).toBe(fallback);
  });
});

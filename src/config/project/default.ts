import { SONG_PIECE_KEYS } from 'typings';

export const DEFAULT_CONFIG = {
  server: {
    owner: 'Owner',
    root: 'http://localhost:8083',
    cdn: 'jsdelivr'
  },
  songs: {
    prefix: '/static/songs',
    pieces: []
  }
};

// In Python: DEFAULT_SONG_PIECE = {v: None for v in SONG_PIECE_KEYS}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DEFAULT_SONG_PIECE = SONG_PIECE_KEYS.reduce((obj: any, v) => {
  obj[v] = null;
  return obj;
}, {});

export const VALID_RESOURCE_URL_SCHEMA = ['http:', 'https:', 'ftp:'];

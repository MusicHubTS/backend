export const SONG_PIECE_KEYS = ['name', 'artist', 'url', 'cover', 'lrc'];

export const DEFAULT_CONFIG = {
  server: {
    owner: 'Owner',
    root: 'http://localhost:8083'
  },
  songs: {
    prefix: '/public/songs',
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

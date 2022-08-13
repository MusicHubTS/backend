/**
 * Declaration of interface for one piece of songs.
 *
 * @param name Name of the song.
 * @param artist String or array of the artists.
 * @param url URL (relative or absolute) of the media file.
 * @param cover Path of the album cover image.
 * @param lrc Path of the lyric file (should be SRT).
 */
export interface SongPiece {
  name: string;
  artist: string[] | string;
  url: string;
  cover: string;
  lrc: string;
}

export interface ProjectConfig {
  server: {
    owner: string;
    root: string;
  };
  songs: {
    pieces: SongPiece[];
  };
}

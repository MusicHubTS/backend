/**
 * Declaration of interface for one piece of songs.
 *
 * @param name Name of the song.
 * @param artist Array of the artists.
 * @param path Path of the media file.
 * @param cover Path of the album cover image.
 * @param lrc Path of the lyric file (should be SRT).
 */
export interface SongPiece {
  name: string;
  artist?: string[];
  path: string;
  cover?: string;
  lrc?: string;
}

export interface ProjectConfig {
  server?: {
    owner?: string;
    root?: string;
    cdn?: string | Record<string, string>;
  };
  songs?: {
    prefix?: string;
    pieces?: Record<string, SongPiece>;
  };
}

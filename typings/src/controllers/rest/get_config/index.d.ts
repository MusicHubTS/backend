export interface PlayerAudio {
  name: string;
  artist: string;
  url: string;
  cover?: string | null;
  lrc?: string | null;
}

export type PlayerAudios = PlayerAudio[];

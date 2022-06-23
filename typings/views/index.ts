import { APlayerAudio } from 'typings';

export interface MusicHubAudio extends APlayerAudio {
  album: string;
  duration?: number; // not a must
}

export type MusicHubAudios = MusicHubAudio[];

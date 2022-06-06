import { APlayerAudio } from 'typings/src/controllers/rest/get_config';

export interface MusicHubAudio extends APlayerAudio {
  album: string;
  duration?: number;  // not a must
}

export type MusicHubAudios = MusicHubAudio[];
export interface APlayerAudio {
  name: string,
  artist: string,
  url: string,
  cover?: string | null,
  lrc?: string | null
}

export type APlayerAudios = APlayerAudio[];
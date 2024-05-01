export interface PodcastDetailDto {
  results: {
    trackCount?: number
    kind: 'podcast-episode' | 'podcast'
    trackName: string
    description: string
    releaseDate: string
    trackTimeMillis: number
    trackId: string
    episodeUrl: string
  }[]
}

import { Adapter } from '@shared/types/adapter.ts'
import { PodcastDetailDto } from './podcast-detail-dto.ts'
import { PodcastDetail } from '../domain/podcast-detail.ts'

export class PodcastDetailAdapter implements Adapter<PodcastDetailDto, PodcastDetail> {
  toModel(podcastDetailDto: PodcastDetailDto): PodcastDetail {
    const firstResult = podcastDetailDto.results[0]

    return {
      ...(firstResult?.trackCount && { episodesCount: firstResult.trackCount }),
      episodes: podcastDetailDto.results
        .filter((result) => result.kind === 'podcast-episode')
        .map((result) => ({
          episodeName: result.trackName,
          releaseDate: result.releaseDate,
          duration: result?.trackTimeMillis || 0,
          episodeId: result.trackId,
          url: result.episodeUrl,
          description: result.description,
        })),
    }
  }
}

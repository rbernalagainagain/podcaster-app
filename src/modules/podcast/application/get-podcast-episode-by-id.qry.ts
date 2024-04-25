import { PodcastId } from '../domain/podcast-id.ts'
import { EpisodeId } from '../domain/episode-id.ts'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import { Episode } from '../domain/episode.ts'

export class GetPodcastEpisodeByIdQry {
  constructor(private readonly podcastRepository: PodcastRepository) {}

  async execute(podcastId: PodcastId, episodeId: EpisodeId): Promise<Episode> {
    const result = await this.podcastRepository.getPodcastById(podcastId)
    return result.episodes.find((episode) => episode.episodeId == episodeId)!
  }
}

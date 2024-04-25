import { Podcast } from '../domain/podcast.ts'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import { PodcastId } from '../domain/podcast-id.ts'

export class GetPodcastByIdQry {
  constructor(private readonly podcastRepository: PodcastRepository) {}

  async execute(podcastId: PodcastId): Promise<Podcast> {
    const response = await this.podcastRepository.getPodcasts()
    return response.find((podcast) => podcast.podcastId === podcastId)!
  }
}

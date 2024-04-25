import { PodcastRepository } from '../domain/podcast.repository.ts'
import { Podcast } from '../domain/podcast.ts'

export class GetPodcastsQry {
  constructor(private readonly podcastRepository: PodcastRepository) {}

  async execute(): Promise<Podcast[]> {
    return this.podcastRepository.getPodcasts()
  }
}

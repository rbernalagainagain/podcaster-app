import { PodcastRepository } from '../domain/podcast.repository.ts'
import { PodcastId } from '../domain/podcast-id.ts'
import { PodcastDetail } from '../domain/podcast-detail.ts'

export class GetPodcastDetailByIdQry {
  constructor(private readonly podcastRepository: PodcastRepository) {}

  async execute(podcastId: PodcastId): Promise<PodcastDetail> {
    return this.podcastRepository.getPodcastById(podcastId)
  }
}

import { PodcastRepository } from '../domain/podcast.repository.ts'
import { Podcast } from '../domain/podcast.ts'

export class GetPodcastsByTermsQry {
  constructor(private readonly podcastRepository: PodcastRepository) {}

  async execute(terms: string): Promise<Podcast[]> {
    const podcasts = await this.podcastRepository.getPodcasts()
    return podcasts.filter((podcast) => {
      return podcast.searchTags.some((tag) => tag.includes(terms))
    })
  }
}

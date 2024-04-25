import { Podcast } from '../domain/podcast.ts'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import { AxiosInstance } from 'axios'
import { PodcastDto } from './podcast-dto.ts'
import { PodcastAdapter } from './podcast.adapter.ts'
import { PodcastId } from '../domain/podcast-id.ts'
import { PodcastDetailAdapter } from './podcast-detail.adapter.ts'
import { PodcastDetail } from '../domain/podcast-detail.ts'
import { PodcastDetailDto } from './podcast-detail-dto.ts'

export class PodcastHttpRepository implements PodcastRepository {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  async getPodcasts(): Promise<Podcast[]> {
    const adapter = new PodcastAdapter()
    const response = await this.axiosInstance.get<{
      feed: { entry: PodcastDto[] }
    }>('us/rss/toppodcasts/limit=100/genre=1310/json')

    return response.data.feed.entry.map((podcastDto) =>
      adapter.toModel(podcastDto),
    )
  }

  async getPodcastById(podcastId: PodcastId): Promise<PodcastDetail> {
    const adapter = new PodcastDetailAdapter()
    const response = await this.axiosInstance.get<PodcastDetailDto>(
      `lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
    )
    console.log(response.data)
    return adapter.toModel(response.data)
  }
}

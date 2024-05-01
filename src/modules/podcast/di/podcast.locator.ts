import { PodcastHttpRepository } from '../infrastructure/podcast-http.repository.ts'
import instanceAxios, { AxiosClient } from '../../../core/http-client/axios-client.ts'
import { GetPodcastsQry } from '../application/get-podcasts.qry.ts'
import { GetPodcastDetailByIdQry } from '../application/get-podcast-detail-by-id.qry.ts'
import { GetPodcastsByTermsQry } from '../application/get-podcasts-by-terms.qry.ts'
import { GetPodcastByIdQry } from '../application/get-podcast-by-id.qry.ts'
import { GetPodcastEpisodeByIdQry } from '../application/get-podcast-episode-by-id.qry.ts'
import { instance, mock } from 'ts-mockito'
import { PodcastRepository } from '../domain/podcast.repository.ts'
import isModeTest from '@core/utils/is-mode-test.ts'

export class PodcastLocator {
  static mockRepository = mock<PodcastRepository>()

  private static readonly podcastHttpRepository = !isModeTest
    ? new PodcastHttpRepository(new AxiosClient(instanceAxios))
    : instance(PodcastLocator.mockRepository)

  static getPodcasts() {
    return new GetPodcastsQry(this.podcastHttpRepository)
  }

  static getPodcastByTerms() {
    return new GetPodcastsByTermsQry(this.podcastHttpRepository)
  }

  static getPodcastById() {
    return new GetPodcastByIdQry(this.podcastHttpRepository)
  }

  static getPodcastDetailById() {
    return new GetPodcastDetailByIdQry(this.podcastHttpRepository)
  }

  static getPodcastEpisodeById() {
    return new GetPodcastEpisodeByIdQry(this.podcastHttpRepository)
  }
}

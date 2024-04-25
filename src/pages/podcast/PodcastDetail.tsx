import { ReactNode, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PodcastLocator } from '../../modules/podcast/di/podcast.locator.ts'
import { PodcastDetail as TypePodcastDetail } from '../../modules/podcast/domain/podcast-detail.ts'

export function PodcastDetail(): ReactNode {
  const millisecondsToMinutes = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000)
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0)
    return minutes + ':' + (Number(seconds) < 10 ? '0' : '') + seconds
  }

  const { podcastId } = useParams()

  const [podcastDetail, setPodcastDetail] = useState<TypePodcastDetail>()

  useEffect(() => {
    if (podcastId) {
      PodcastLocator.getPodcastDetailById()
        .execute(podcastId)
        .then((podcast) => {
          setPodcastDetail(podcast)
        })
    }
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Episode</th>
            <th>Release Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {podcastDetail?.episodes.length !== 0 &&
            podcastDetail?.episodes.map((episode, key) => {
              return (
                <tr key={key}>
                  <td>
                    <Link
                      to={`/podcast/${podcastId}/episode/${episode.episodeId}`}
                    >
                      {episode.episodeName}
                    </Link>
                  </td>
                  <td>{episode.releaseDate}</td>
                  <td>{millisecondsToMinutes(episode.duration)}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

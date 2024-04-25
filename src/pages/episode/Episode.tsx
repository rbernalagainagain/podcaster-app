import { ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PodcastLocator } from '../../modules/podcast/di/podcast.locator.ts'
import type { Episode as TypeEpisode } from '../../modules/podcast/domain/episode.ts'

export function Episode(): ReactNode {
  const { podcastId, episodeId } = useParams()
  const [episode, setEpisode] = useState<TypeEpisode>()

  useEffect(() => {
    if (!podcastId || !episodeId) return
    PodcastLocator.getPodcastEpisodeById()
      .execute(podcastId, episodeId)
      .then((episode) => {
        setEpisode(episode)
      })
  }, [])

  return (
    <div>
      {episode && (
        <div>
          <h1>{episode.episodeName}</h1>
          <p>{episode.releaseDate}</p>
          <p>{episode.description}</p>
          <audio src={episode.url} autoPlay controls={true}>
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
      )}
    </div>
  )
}

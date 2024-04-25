import { ReactNode, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import styles from './layout-detail.module.css'
import { PodcastLocator } from '../../modules/podcast/di/podcast.locator.ts'
import { Podcast } from '../../modules/podcast/domain/podcast.ts'

export function LayoutDetail(): ReactNode {
  const { podcastId } = useParams()
  const [podcast, setPodcast] = useState<Podcast>()

  useEffect(() => {
    if (!podcastId) return
    PodcastLocator.getPodcastById()
      .execute(podcastId)
      .then((podcast) => setPodcast(podcast))
  }, [])

  return (
    <div className={styles.layoutDetail}>
      <div className={styles.aside}>
        <div>
          <img src={podcast?.image} alt="podcast" />
          <div>{podcast?.author}</div>
          <div>{podcast?.title}</div>
          <div>{podcast?.summary}</div>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

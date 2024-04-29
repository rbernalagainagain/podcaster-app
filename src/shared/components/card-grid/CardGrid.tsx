import { Podcast } from '../../../modules/podcast/domain/podcast.ts'
import { ReactNode } from 'react'
import styles from './card-grid.module.css'

interface CardGridProps {
  onClicked: (podcastId: string) => void
  podcasts: Podcast[]
  renderItem: (podcast: Podcast) => ReactNode
}

export const CardGrid = ({
  podcasts,
  renderItem,
  onClicked,
}: CardGridProps) => {
  return (
    <div className={styles.content}>
      {podcasts.map((podcast) => {
        return (
          <div
            key={podcast.podcastId}
            onClick={() => onClicked(podcast.podcastId)}
          >
            {renderItem(podcast)}
          </div>
        )
      })}
    </div>
  )
}

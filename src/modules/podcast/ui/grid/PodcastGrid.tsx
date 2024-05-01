import { Podcast } from '@podcast/domain/podcast.ts'
import { ReactNode } from 'react'
import { CardGrid } from '@components/card-grid/CardGrid.tsx'

interface PodcastGridProps {
  onClicked: (podcastId: string) => void
  podcasts: Podcast[]
  renderItem: (podcast: Podcast) => ReactNode
}

export function PodcastGrid({ podcasts, onClicked, renderItem }: PodcastGridProps): ReactNode {
  return (
    <CardGrid list={podcasts}>
      {podcasts.map((podcast) => {
        return (
          <div key={podcast.podcastId} onClick={() => onClicked(podcast.podcastId)}>
            {renderItem(podcast)}
          </div>
        )
      })}
    </CardGrid>
  )
}

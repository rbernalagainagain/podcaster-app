import { Card } from '../../../core/components/card/Card.tsx'
import { CardImage } from '../../../core/components/card-image/CardImage.tsx'
import { Podcast } from '../../../modules/podcast/domain/podcast.ts'
import { ReactNode } from 'react'
import { CardFooter } from '../../../core/components/card-footer/CardFooter.tsx'

interface PodcastCardProps {
  podcast: Podcast
}

interface PodcastsGridProps {
  onClicked: (podcastId: string) => void
  podcasts: Podcast[]
  renderItem: (podcast: Podcast) => ReactNode
}

export function PodcastCard({ podcast }: PodcastCardProps) {
  const { image: imageUrl } = podcast
  return (
    <Card>
      <CardImage url={imageUrl} />
      <CardFooter>
        {podcast.title}
        <small>Author:{podcast.author}</small>
      </CardFooter>
    </Card>
  )
}

export const PodcastsGrid = ({
  podcasts,
  renderItem,
  onClicked,
}: PodcastsGridProps) => {
  return podcasts.map((podcast) => {
    return (
      <div key={podcast.podcastId} onClick={() => onClicked(podcast.podcastId)}>
        {renderItem(podcast)}
      </div>
    )
  })
}

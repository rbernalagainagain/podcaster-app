import { ReactNode } from 'react'
import styles from './podcasts.module.css'
import { useFetchPodcasts } from './useFetchPodcasts.ts'
import { useNavigate } from 'react-router-dom'
import { PodcastId } from '../../modules/podcast/domain/podcast-id.ts'
import { Input } from '../../core/components/input/Input.tsx'
import { PodcastCard, PodcastsGrid } from './grid/PodcastsGrid.tsx'
import { PodcastLocator } from '../../modules/podcast/di/podcast.locator.ts'

export interface FormSearchInput {
  terms: string
}

export function Podcasts(): ReactNode {
  const navigate = useNavigate()
  const { podcasts, setPodcasts } = useFetchPodcasts()

  const onClicked = (podcastId: PodcastId) => navigate(`/podcast/${podcastId}`)

  const handleSubmit = async (terms: string) => {
    const response = await PodcastLocator.getPodcastByTerms().execute(terms)
    setPodcasts(response)
  }

  return (
    <div className={styles.podcast}>
      <div className={styles.innerPodcasts}>
        <div className={styles.toolbar}>
          <div className={styles.podcastCounter}>
            <span className={styles.counter}>{podcasts.length}</span>
          </div>
          <Input
            onChange={(ev) => handleSubmit(ev.target.value)}
            placeholder="Filter podcasts..."
          />
        </div>

        <div className={styles.content}>
          <PodcastsGrid
            podcasts={podcasts}
            onClicked={onClicked}
            renderItem={(podcast) => <PodcastCard podcast={podcast} />}
          ></PodcastsGrid>
        </div>
      </div>
    </div>
  )
}

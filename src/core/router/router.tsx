import { createBrowserRouter } from 'react-router-dom'
import App from '../../App.tsx'
import { Podcasts } from '../../pages/podcasts/Podcasts.tsx'
import { PodcastDetail } from '../../pages/podcast/PodcastDetail.tsx'
import { LayoutDetail } from '../../layout/detail/LayoutDetail.tsx'
import { Episode } from '../../pages/episode/Episode.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Podcasts />,
      },
      {
        element: <LayoutDetail />,
        children: [
          {
            path: '/podcast/:podcastId',
            element: <PodcastDetail />,
          },
          {
            path: '/podcast/:podcastId/episode/:episodeId',
            element: <Episode />,
          },
        ],
      },
    ],
  },
])

export default router

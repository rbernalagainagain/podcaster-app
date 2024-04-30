import { createBrowserRouter } from 'react-router-dom'
import App from '../../App.tsx'
import { Podcasts } from '../../pages/podcasts/Podcasts.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    async loader() {
      const { loader } = await import('./../utils/loader-sw')
      return loader()

      // return await window.navigator.serviceWorker.ready.then((registration) => {
      //   console.log('Service Worker ready', registration)
      // })
    },
    element: <App />,
    children: [
      {
        path: '/',
        element: <Podcasts />,
      },
      {
        lazy: () => import('../../shared/layout/detail/LayoutDetail'),
        children: [
          {
            path: '/podcast/:podcastId',
            lazy: () => import('../../pages/podcast-detail/PodcastDetail'),
          },
          {
            path: '/podcast/:podcastId/episode/:episodeId',
            lazy: () => import('../../pages/episode/Episode'),
          },
        ],
      },
    ],
  },
])

export default router

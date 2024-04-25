self.addEventListener('install', function () {
  self.skipWaiting()
  console.log('Service worker has been installed.')
})

self.addEventListener('activate', function (event) {
  event.waitUntil(handleActivation())
})

self.addEventListener('fetch', function (event) {
  const url = new URL(event.request.url)

  if (
    url.origin.includes('api.allorigins.win') ||
    url.origin.includes('is1-ssl.mzstatic.com')
  ) {
    return event.respondWith(cacheFirst(event.request))
  }
})

async function handleActivation() {
  await self.clients.claim()
  console.log('Service worker has been activated.')
}

const cacheFirst = async (request) => {
  let response = await caches.match(request)
  if (response) {
    return response
  }

  const responseFromNetwork = await fetch(request)
  addCache(request, responseFromNetwork)
  return responseFromNetwork
}

function addCache(request, response) {
  const copy = response.clone()
  caches.open('v1').then(function (cache) {
    cache.put(request, copy)
  })
}

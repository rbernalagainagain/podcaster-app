export const loader = async () => {
  const registration = await window.navigator.serviceWorker.ready
  if (registration.active){
    console.debug('Service Worker ready', registration.active.state)
  }

  return null
}

import { Workbox } from 'workbox-window'

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return console.log('browser not supported service worker')
  }

  const wb = new Workbox('./sw.bundle.js')

  try {
    await wb.register()
    console.log('service worker registered')
  } catch (error) {
    console.log('failed to register service worker', error)
  }
}

export default swRegister

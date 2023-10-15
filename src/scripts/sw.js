import CacheHelper from './utils/cacheHelper'

const assetsToCache = [
  './index.html',
  './sw.bundle.js',
  './service-worker.js',
  './app.bundle.js',
  './app.webmanifest'
]

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...')

  CacheHelper.cachingAppShell([...assetsToCache])
})

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...')

  CacheHelper.deleteOldCaches()
})

self.addEventListener('fetch', (event) => {
  console.log(event.request)

  CacheHelper.networkFirstCacheStrategy(event)
})

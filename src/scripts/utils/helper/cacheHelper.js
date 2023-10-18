import CONFIG from '../../../config/config'

const CacheHelper = {
  async cachingAppShell (req) {
    const cacheToAdd = await this._openCaches()
    await cacheToAdd.addAll(req)
  },

  async deleteOldCaches () {
    const cache = await caches.keys()
    const filteredCaches = cache.filter((name) => name !== CONFIG.CACHE_NAME)
    const deleteCahce = filteredCaches.map((filteredCache) => caches.delete(filteredCache))
    return deleteCahce
  },

  async networkFirstCacheStrategy (event) {
    try {
      const networkResponse = await fetch(event.request)
      const cache = await this._openCaches()
      cache.put(event.request, networkResponse)

      return networkResponse
    } catch (error) {
      const cachedResponse = await caches.match(event.request)
      return cachedResponse
    }
  },

  // ================================================================================

  async _openCaches () {
    const result = await caches.open(CONFIG.CACHE_NAME)
    return result
  }
}

export default CacheHelper

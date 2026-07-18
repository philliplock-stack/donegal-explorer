const CACHE_NAME = 'donegal-explorer-v2';

// 1. Only cache the essential app shell files upfront
const CORE_ASSETS = [
  './',
  './index.html',
  './birds.html',
  './style.css',
  './app.js',
  './manifest.json',
  './assets/waw-bg.mp4'
];

// Install Event - Stores the core UI files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event - Cleans up old cache versions
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 2. SMART FETCH: If a bird image/audio isn't cached, download it once and save it automatically!
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => {
        // Don't cache invalid responses or external tool scripts
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // Clone the response and save it to cache in the background
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Offline fallback if network fails and file isn't cached yet
      });
    })
  );
});

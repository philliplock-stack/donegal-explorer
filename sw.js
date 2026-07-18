const CACHE_NAME = 'donegal-birds-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/birds.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/assets/waw-bg.gif',
  '/assets/chough.jpg',
  '/assets/chough.mp3',
  '/assets/corncrake.jpg',
  '/assets/corncrake.mp3',
  '/assets/icon-192.png',
  '/assets/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'static-cache-v1';
const DATA_CACHE_NAME = 'data-cache-v1';
const urlsToCache = [
  '/',
  'static/js/bundle.js',
  'static/js/main.chunk.js',
  'static/js/0.chunk.js',
  'manifest.json',
  'favicon.ico',
  'logo128.png',
  'logo512.png',
  'https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap',
];

const cacheResources = async () => {
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(urlsToCache);
};

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(cacheResources());
});

const clearOldCache = async () => {
  const cacheNames = await caches.keys();
  const oldCacheName = cacheNames.find((name) => name !== CACHE_NAME);
  caches.delete(oldCacheName);
};

self.addEventListener('activate', (e) => {
  e.waitUntil(clearOldCache());
});

const getResponseByRequestDinamic = async (request) => {
  const dataCache = await caches.open(DATA_CACHE_NAME);

  return fetch(request).then((response) => {
    if (response.status === 200) {
      dataCache.put(request.url, response.clone());
    }
    return response;
  }).catch(() => dataCache.match(request));
};

const getResponseByRequestStatic = async (request) => {
  const cache = await caches.open(CACHE_NAME);
  const response = await cache.match(request);
  return response || fetch(request);
};

self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('/messages')) {
    e.respondWith(getResponseByRequestDinamic(e.request));
  } else {
    e.respondWith(getResponseByRequestStatic(e.request));
  }
});

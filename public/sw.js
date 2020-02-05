/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'cache-v1';
const urlsToCache = [
    "/", 
    "static/js/bundle.js",
    "static/js/main.chunk.js",
    "static/js/1.chunk.js",
    "manifest.json",
    "favicon.ico",
    "logo192.png",
    "logo512.png",
    'https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap',
];

self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(cacheResources());
});

const cacheResources = async () => {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll(urlsToCache);
};

self.addEventListener('activate', e => {
    e.waitUntil(clearOldCache());
});

const clearOldCache = async () => {
    const cacheNames = await caches.keys();
    const oldCacheName = cacheNames.find(name => name !== CACHE_NAME);
    caches.delete(oldCacheName);
};


self.addEventListener('fetch', e => {
    e.respondWith(getResponseByRequest(e.request));
});

const getResponseByRequest = async request => {
    const cache = await caches.open(CACHE_NAME);
    const response = await cache.match(request);
    return response || fetch(request);
};
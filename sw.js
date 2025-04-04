// sw.js
const CACHE_NAME = "digiforge-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",       // if using an external CSS file
  "/script.js",        // if using external JS
  "/favicon.ico",      // optional
  "https://cdn.tailwindcss.com", // Tailwind CDN
  "https://i.ibb.co/545b7mr/image.png" // logo
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

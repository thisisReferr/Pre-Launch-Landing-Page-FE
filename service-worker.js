importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js");

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  /.+\/web-components\/.+\.js$/, // Regular expression literal
  new workbox.strategies.StaleWhileRevalidate(),
);

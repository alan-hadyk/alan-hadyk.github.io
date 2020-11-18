if ("function" === typeof importScripts) {
  // eslint-disable-next-line no-undef
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute("/index.html", {
      blacklist: [/^\/_/, /\/[^/]+\.[^/]+$/]
    });

    /* Images */
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      workbox.strategies.cacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.Plugin({
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            maxEntries: 60
          })
        ]
      })
    );

    /* Scripts */
    workbox.routing.registerRoute(
      /\.(?:js)$/,
      workbox.strategies.cacheFirst({
        cacheName: "scripts",
        plugins: [
          new workbox.expiration.Plugin({
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            maxEntries: 60
          })
        ]
      })
    );

    /* Stylesheets */
    workbox.routing.registerRoute(
      /\.(?:css)$/,
      workbox.strategies.cacheFirst({
        cacheName: "stylesheets",
        plugins: [
          new workbox.expiration.Plugin({
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            maxEntries: 60
          })
        ]
      })
    );

    /* Fonts */
    workbox.routing.registerRoute(
      /\.(?:eot|woff2|woff|ttf|otf)$/,
      workbox.strategies.cacheFirst({
        cacheName: "fonts",
        plugins: [
          new workbox.expiration.Plugin({
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            maxEntries: 60
          })
        ]
      })
    );
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}

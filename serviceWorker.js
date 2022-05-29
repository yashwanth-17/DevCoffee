const staticDevCoffee = "dev-coffee-site-v1";

const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/images/espresso-macchiato.jpg",
  "/images/doppio.jpg",
  "/images/expresso-shot.jpg",
  "/images/cappuccino.jpg",
  "/images/americano.jpg",
  "/images/flat-white.jpg",
  "/images/latte.jpg",
  "/images/mocha.jpg",
  "/images/black-coffee.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

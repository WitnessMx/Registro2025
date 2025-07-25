const RegistroPWA2025 = "RegistroUbic2025@v3-cache";
const assets = [
  "/registro2025/",
  "/registro2025/index.html",
  "/registro2025/scripts/Captura.js",
  "/registro2025/scripts/datos.js",
  "/registro2025/scripts/leaflet.js",
  "/registro2025/scripts/html5-qrcode.min.js",
  "/registro2025/scripts/icons_div.js",
  "/registro2025/scripts/leaflet-easy-button.js",
  "/registro2025/scripts/leaflet-tag-filter-button.js",
  "/registro2025/scripts/map25.js",
  "/registro2025/scripts/pop.js",
  "/registro2025/scripts/leaflet/leaflet-src.esm.js",	
  "/registro2025/scripts/leaflet/leaflet-src.esm.js.map",
  "/registro2025/scripts/leaflet/leaflet-src.js",
  "/registro2025/scripts/leaflet/leaflet-src.js.map",
  "/registro2025/scripts/leaflet/leaflet.js",
  "/registro2025/scripts/leaflet/leaflet.js.map",
  "/registro2025/scripts/leaflet/leaflet.css",
  "/registro2025/scripts/search/leaflet-search.js",
  "/registro2025/scripts/search/leaflet-search.css",
  "/registro2025/styles/leaflet-easy-button.css",
  "/registro2025/styles/leaflet-tag-filter-button.css",
  "/registro2025/styles/map.css",
  "/registro2025/styles/marca-con-numero.css",
  "/registro2025/styles/popups.css",
  "/registro2025/styles/ripple.min.css",
  "/registro2025/styles/style_calibracion2023.css",
  "/registro2025/styles/imagenes/layo240725.png",
  "/registro2025/styles/imagenes/loader.gif",
  "/registro2025/styles/imagenes/marcador2.png",
  "/registro2025/styles/imagenes/qr.jpg",
  "/registro2025/styles/imagenes/registro.png",
  "/registro2025/styles/imagenes/search-icon.png",
 
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(RegistroPWA2025).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheList) => {
      return Promise.all(
        cacheList.map((cache) => {
          if (!RegistroPWA2025.includes(cache)) {
            return caches.delete(cache);
          }
        })
      );
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

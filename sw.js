/* UNDERNET service worker — the suite opens even when the grid is down. */
const CACHE = 'undernet-v1';
const CORE = [
  '.', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.5.4/peerjs.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
];
/* never cache map tiles or live data — they'd balloon the cache */
const SKIP = /basemaps\.cartocdn|arcgisonline|tile\.openstreetmap|overpass/;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = e.request.url;
  if (SKIP.test(url)){
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    return;
  }
  const isPage = e.request.mode === 'navigate' || /index\.html(\?|$)/.test(url);
  if (isPage){
    /* network-first for the app itself, so pushes still reach users */
    e.respondWith(fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
    return;
  }
  /* cache-first for libraries, fonts, icons */
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    if (res.ok || res.type === 'opaque'){
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
    }
    return res;
  })));
});

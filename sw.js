// يخلي الموقع يشتغل كتطبيق. الصفحة والبيانات تجي دائماً جديدة من النت، والصور تنحفظ للسرعة.
const CACHE = 'axis-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isImg = /\.(jpg|jpeg|png|webp)$/i.test(new URL(req.url).pathname);
  if (isImg) {
    e.respondWith(caches.open(CACHE).then(c => c.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }))));
  } else {
    e.respondWith(fetch(req, {cache: 'no-store'}).then(r => { if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r; }).catch(() => caches.match(req)));
  }
});

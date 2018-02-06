// Forces service worker to become active
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', () => {
  // Get window clients
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    // Force open pages to refresh
    for (let windowClient of windowClients) {
      windowClient.navigate(windowClient.url);
    }
  });
});
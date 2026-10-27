// Shared CodeSpark PWA registration. GitHub Pages and PWABuilder use HTTPS.
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(err => console.warn('Offline support registration failed:', err)));
}

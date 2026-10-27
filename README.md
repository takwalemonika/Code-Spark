# CodeSpark App Website (PWA-ready)

## Files
- `index.html` — home/dashboard and links to all sections
- `style.css` — responsive shared styling
- `app.js` — shared service-worker registration
- `modules.html` — the learning modules you supplied
- `python.html` — Python editor you supplied (Skulpt needs internet)
- `javascript.html` — JavaScript editor
- `quizzes.html` — the quiz page you supplied
- `projects.html` — mini project ideas you supplied
- `admin.html` — local admin/lesson-notes prototype
- `manifest.json` — installable app metadata
- `service-worker.js` — basic static-file caching for offline visits
- `icons/icon-192.png` and `icons/icon-512.png` — app icons

## Test locally
Keep the folder structure intact. For best PWA testing, serve this folder over localhost (for example VS Code Live Server) or publish it to GitHub Pages. Opening HTML by double-clicking will not enable service workers.

## Publish to GitHub Pages
Upload the contents of this folder to the root of a GitHub repository, then enable Settings → Pages → Deploy from a branch → `main` → `/ (root)`. Wait for GitHub Pages to publish, then open the generated HTTPS URL.

## Create an Android package
Paste the published HTTPS website URL into PWABuilder and follow its Android packaging steps. Test the generated APK on your device before sharing it.

## Limitations
This is a front-end learning prototype. Admin notes and quiz scores are stored in browser localStorage on the current device only; there is no secure account system or shared student database. Python execution uses the Skulpt CDN and requires internet access. The JavaScript editor executes code in the page context and is intended for practice with trusted code only.

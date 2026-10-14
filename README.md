# Supply Chain Academy v2

## Content structure
- 3 learning tracks: CSCP, CLTD, CIPS
- 3 units per track (9 total)
- 3 lessons per unit (27 total)
- 30 practice questions per unit (270 total)
- Arabic explanations with English terminology, practical scenarios, and answer rationales

## Files
- `index.html`: responsive Arabic learning interface, lesson navigation, unit quizzes, progress page, exportable progress backup
- `content.js`: authored lesson and quiz content
- `manifest.webmanifest`: installable web app metadata
- `sw.js`: static asset caching for offline/reliable loading
- `icon-192.png`, `icon-512.png`: app icons

## Publish on GitHub Pages
Upload all files in this folder to the repository root, replacing the old files. Then open Settings → Pages, choose `Deploy from a branch`, select branch `main` and folder `/(root)`, and save. Wait for the deployment to finish.

## Progress and limitations
Progress is stored in localStorage on the current browser/device. Use “Export progress backup” before changing browsers or clearing website data. This version does not sync across devices and does not implement automatic push reminders. Push notifications require a push service/backend and explicit permission.

## Study-content note
This is original introductory study content and practice questions, not official exam material and not a guarantee of alignment to every current exam objective. Check the latest official syllabus/exam blueprint and authorized resources for each certification before relying on it for exam preparation. Some question stems are intentionally concept-reinforcement variants; review and expand the bank with domain-specific past-practice style questions as the curriculum is validated.

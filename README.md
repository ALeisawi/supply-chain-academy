# Supply Chain Academy — iPhone PWA starter

## What works now
- Arabic RTL responsive learning interface.
- Course switching between introductory CSCP, CLTD, and CIPS lessons.
- Vocabulary, scenario examples, YouTube topic search links, and one-question quiz per course.
- Progress and quiz result saved locally in the browser.
- PWA manifest and service worker scaffold.

## Important notification limitation
The included screen can request browser notification permission, and the service worker can display a notification **when a real push message is delivered**. It does not yet schedule or send daily push notifications by itself. On iPhone, a web app generally needs to be installed to the Home Screen, hosted over HTTPS, and notifications enabled (iOS/iPadOS 16.4+). Reliable scheduled delivery while the app is closed requires a push service/backend, VAPID keys, storing each device's push subscription, and a daily scheduled server job. Those hosting credentials and services are not included/configured in this starter.

## Publish for iPhone testing
1. Deploy the contents of this folder to an HTTPS static host (e.g. a static hosting provider).
2. Open the deployed URL in Safari on iPhone.
3. Tap Share → Add to Home Screen → Add.
4. Open it from the new Home Screen icon.
5. To enable real daily push reminders, implement the server endpoints for push subscription and configure VAPID credentials plus a daily scheduler. Do not expose the VAPID private key in client code.

## Content note
Lessons are introductory examples, not a complete official exam curriculum. Before exam preparation, map the complete study plan to the current official CIPS / ASCM exam guide and use authorized study resources.

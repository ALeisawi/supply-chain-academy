const CACHE='supply-chain-academy-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{if(event.request.method==='GET')event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).catch(()=>caches.match('./index.html'))));});
self.addEventListener('push',event=>{let data={title:'وقت الدراسة!',body:'درس اليوم في Supply Chain Academy بانتظارك.',url:'./'};try{data={...data,...event.data.json()}}catch(e){};event.waitUntil(self.registration.showNotification(data.title,{body:data.body,icon:'./icon-192.png',badge:'./icon-192.png',data:{url:data.url},tag:'sca-daily-study'}));});
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{for(const c of list){if('focus' in c)return c.focus()}return clients.openWindow(event.notification.data?.url||'./')}));});

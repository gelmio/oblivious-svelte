!function(){"use strict";const e=1613383315030,s="cache"+e,a=["/client/client.0af0fdb0.js","/client/inject_styles.5607aec6.js","/client/index.fd85221e.js","/client/BuyButton.230907ce.js","/client/index.66f9ab02.js","/client/[slug].0120b26a.js","/client/awww-yeah.1a578cdd.js","/client/about.130ce983.js","/client/help.61ca1b90.js"].concat(["/service-worker-index.html","/favicon.png","/fonts/Lato-Light.ttf","/global.css","/images/3D-cover.jpg","/images/ADVMoto-grey.png","/images/ExcuseMyBike-grey.png","/images/OverlandBound-grey.png","/images/Rider-grey.png","/images/carousel/images(1).jpg","/images/carousel/images(10).jpg","/images/carousel/images(11).jpg","/images/carousel/images(12).jpg","/images/carousel/images(2).jpg","/images/carousel/images(3).jpg","/images/carousel/images(4).jpg","/images/carousel/images(5).jpg","/images/carousel/images(6).jpg","/images/carousel/images(7).jpg","/images/carousel/images(9).jpg","/images/cruiser-grey.png","/images/how-step1.jpg","/images/how-step2.jpg","/images/how-step3.jpg","/images/icons/keyboard_arrow_left-24px.svg","/images/icons/keyboard_arrow_right-24px.svg","/images/kindle-pad-phone.jpg","/images/logo-150.png","/images/logo-750.png","/images/royalenfield-grey.png","/manifest.json"]),t=new Set(a);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(a))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const a of e)a!==s&&await caches.delete(a);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const a=new URL(s.request.url),i=a.protocol.startsWith("http"),n=a.hostname===self.location.hostname&&a.port!==self.location.port,c=a.host===self.location.host&&t.has(a.pathname),g="only-if-cached"===s.request.cache&&!c;!i||n||g||s.respondWith((async()=>c&&await caches.match(s.request)||async function(s){const a=await caches.open("offline"+e);try{const e=await fetch(s);return a.put(s,e.clone()),e}catch(e){const t=await a.match(s);if(t)return t;throw e}}(s.request))())}))}();

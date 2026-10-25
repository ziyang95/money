const CACHE="jizhang-web-v5";
const FILES=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith("jizhang-web-")&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener("fetch",event=>{
  const req=event.request;if(req.method!=="GET")return;
  const url=new URL(req.url);if(url.origin!==self.location.origin)return;
  const isPage=req.mode==="navigate"||url.pathname.endsWith("/index.html")||url.pathname.endsWith("/");
  if(isPage){event.respondWith((async()=>{try{const response=await fetch(req,{cache:"no-store"});if(response&&response.ok){const cache=await caches.open(CACHE);cache.put("./index.html",response.clone());return response}}catch(e){}return (await caches.match("./index.html"))||Response.error()})());return;}
  event.respondWith((async()=>{const cached=await caches.match(req);if(cached)return cached;try{const response=await fetch(req);if(response&&response.ok){const cache=await caches.open(CACHE);cache.put(req,response.clone())}return response}catch(e){return cached||Response.error()}})());
});

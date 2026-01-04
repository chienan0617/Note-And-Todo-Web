'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8b323be0708c0e58aa157dd47833c7b7",
"assets/AssetManifest.bin.json": "88b7d6accb6b53810d26d90a841941e8",
"assets/assets/document/color.json": "40c689b3b66ffbb34f8c77fe35a0dd52",
"assets/assets/document/colors.json": "ad0d908159225e90dc1924b63c073f50",
"assets/assets/document/language/en.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/document/language/zh.json": "a23c3d641c6a66e043db4845f6987a2c",
"assets/assets/document/language.json": "561178a5945117a9dff9c4461501432e",
"assets/assets/document/register.json": "96e45b3cf3c2c10490ce1700fca3b2ae",
"assets/assets/document/styles.dart": "7162101a46fc8bf760dbd62ee5c90c5a",
"assets/assets/document/system.json": "85e8cd8a81f2fb84dff23981573615eb",
"assets/assets/document/tutorial/en.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/document/tutorial/tutorial.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/document/tutorial/zh.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/assets/icon/icon.webp": "ecec3d46996db2169a4b886e31da1131",
"assets/assets/image/17/171.webp": "45ef1fc49464ceb9108e525e8fec29c4",
"assets/assets/image/17/172.webp": "6687ad39f33cd704f77c2788cc914852",
"assets/assets/image/17/173.webp": "84d48c41d1c9ae10ab3d2c4eac3e2cf0",
"assets/assets/image/logo/b.png": "9366bb786a32f3e6c8da7a41692edda1",
"assets/assets/image/logo/chat.png": "c08b744a0647e99164eb06d47b205ad1",
"assets/assets/image/logo/logo.png": "9a0e365fff7d3d626607458bf73a3e33",
"assets/assets/image/logo/s.png": "c60e189fddceb0f0f0a379db523b3d15",
"assets/assets/image/logo/t.png": "c5427e985efebee40360eb9dc7cca6f2",
"assets/assets/image/logo/v.png": "a1410bcdd83324f57afd9d2aa8e2b53a",
"assets/assets/image/logo/w.png": "389d9329002111205fbcaccd69271694",
"assets/assets/image/symbolize/error.svg": "8db75780056c369f3f221f5b0277c0c9",
"assets/FontManifest.json": "9f0e757b134b904e3fc90aa9b50f799b",
"assets/fonts/MaterialIcons-Regular.otf": "5c970b091b1e5e78a3e02969261e4b6a",
"assets/NOTICES": "d8aaa65f203de994fb0c489bdfd9d80f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "7a8e0ae87a852dc7b22d583bc4dd2fcb",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "f99aee94263d782badf430948b12cb97",
"icons/Icon-192.png": "9d46aa2a54bafa42c57a3a9baf67ac3b",
"icons/Icon-512.png": "71c950d19dca5dbf2069680a89581185",
"icons/Icon-maskable-192.png": "9d46aa2a54bafa42c57a3a9baf67ac3b",
"icons/Icon-maskable-512.png": "71c950d19dca5dbf2069680a89581185",
"index.html": "7ef32b886864cbd47a4546cf58f65dd2",
"/": "7ef32b886864cbd47a4546cf58f65dd2",
"main.dart.js": "0af0c597a5123cb54bd06347880adefe",
"manifest.json": "22ee62b80529bb7d7d9e056b28bbe3e3",
"splash/img/dark-1x.png": "9d46aa2a54bafa42c57a3a9baf67ac3b",
"splash/img/dark-2x.png": "ab748a10b784b55864b321a9923539db",
"splash/img/dark-3x.png": "f1d1fef87553730c01b99c03805e06de",
"splash/img/dark-4x.png": "f4e6d62d46ff0929d813ad3240ff59b8",
"splash/img/light-1x.png": "9d46aa2a54bafa42c57a3a9baf67ac3b",
"splash/img/light-2x.png": "ab748a10b784b55864b321a9923539db",
"splash/img/light-3x.png": "f1d1fef87553730c01b99c03805e06de",
"splash/img/light-4x.png": "f4e6d62d46ff0929d813ad3240ff59b8",
"version.json": "d2b76325ec8bd7b7b0b0b7ff553ee2c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

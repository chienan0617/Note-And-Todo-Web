'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/config": "ee935e1790d26a3e35da072bb8b4fe36",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9ebe7db29dbe4bea4a379ab96f135f76",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d78dc07adad7aedb165cfe07da5c8508",
".git/logs/refs/heads/master": "d78dc07adad7aedb165cfe07da5c8508",
".git/logs/refs/remotes/origin/master": "9f0ef9c40ee477d996b35ea0da40b9f2",
".git/objects/01/8d205a0173a4be1af9dd36616d142055738f08": "f63adb75a6fc9da0bc559c647a540148",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/088e5040331585b48c818cb015aca20e363758": "950d0cc7bda4a8757c94a5cd3b550ca2",
".git/objects/09/67ef424bce6791893e9a57bb952f80fd536e93": "468eadae31baf8cd84e8ef7fc78d49ac",
".git/objects/0a/07da386166d007a5d2901e3fc9931037251500": "8818389a7ca6fd04ec5693e9cda4f77c",
".git/objects/0b/cac1cf6f25de8523faf38a690069a49dafc1af": "68c34fe8f8cb689ed0c7fa619c946a12",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/12/152082cf95c32b2ea4a30ad654546cd27b8b80": "6e70691ef297aabce434dd17f44f5386",
".git/objects/12/74905b28c3685c1b604cec482bc58bfd7edc08": "a2d949c98d3af72e876996dc30ab89d5",
".git/objects/18/3e34a592d2304bed40a2764ae69fe5bcb41c37": "e7088a4dea2485f397730c02fb80cc74",
".git/objects/1b/6d3d328514bb797e3e20f7ca3c161c17ef4dda": "99f216935e88c13f0bbd63ed78c89973",
".git/objects/29/91fdf664ddafa90de01b69d3bc65e022b496af": "9d01687dadd2ab33628509c7a95bc488",
".git/objects/31/61eae5aff5e629158bbf3926343cbcbecd56e5": "a329b45deccfee5def5bbb1ced5628d5",
".git/objects/36/b42d7fb2d0c111dc874b49a33c70c3e8ef3624": "37623a889bdb5bf228067b7fa83d773c",
".git/objects/37/9da3d890a8f8717b1761c1a64f7975bb99f02f": "a0fddb25bd15fb8022eb1733b8c081f5",
".git/objects/37/efdc8b22142d62859b30bfd32fad941313b6a1": "3e724662f28590bc7c213ee7c2f6fd15",
".git/objects/39/4bc79e52b08a69c5bdf763fb57e19c106248f4": "7aec4b1b72f34fb8990227a53d5a0132",
".git/objects/39/7ba9899d8b5dcaef597aa8c192700d236cd3bc": "39a07678e70d0beb4c1ae5c470126019",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/c40d28f695bd3d5a8b296cc39032b93f6673f8": "0fbff4e015fac4b858d6f42f37e791ed",
".git/objects/3f/964cd31552cb5e572dc89ebfba33b68601f100": "c8a02c669dc2102913b4741e48e54ed1",
".git/objects/3f/de9d02f78d01434ec7541c5db010317644447a": "ce6d7cabc94acb51ea38eaf7184efb8a",
".git/objects/40/be157b6638cbc74a0e7d1c6dba68914505540b": "e5af60d6925a4c0c7f96ece18df2cf8c",
".git/objects/45/372a177108417a5cecc8e29bcaf443b63d5dd5": "a78798d5d490cd177c04b3b5dfcc9b48",
".git/objects/49/27f51f295f5f775ae25760d2720197ef265a3f": "2a61f76a596377855de1ac5111438da6",
".git/objects/4c/9ac9d507587b87d243fd11aa8c735b96c0258d": "5259c41a76d85cedcd1f77f5ef2dfe82",
".git/objects/4d/208fbc1f4463ecea7a5854b3b69d8772101c77": "650d42044a521f6981b5e18ea0b90bdb",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/cb5faf503865fa3fa18ec7b674c934cef35d10": "92c41886d093cb2e80465fa5ffae78e0",
".git/objects/63/fde34e863b04545ba8689af390004cdc4e6b54": "52fcacb590c5d31e32e296bad957ca8a",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/0308027bf277f972e4bd3ee39bbeb6e1567b84": "081f9cd5b71a8b6feb58623df6742735",
".git/objects/6c/b680d7676b142438cc6f5577dd4ace1c0e54a1": "34d198944b8ee89382c4e9bc2fd1b98e",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/7b7c0964053cde0768ee9da2b276480f244403": "ed9fa194b48d8b667db85a7d84a8dc7e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/81/6502af9d2e4f85a45b0e00c35c735cc022dfe2": "6f2354a3772d553f1afc5ef87d5d2c9e",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/82/6eeecdeea5996767f2abff37eb826b2faffcf3": "d5631a588e238fcfe6c80d3efc0ebd12",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/80b06f341cfb13cfddf3cbbb6c71d6acb81c91": "7ff262709b32636c29a988bc454d0239",
".git/objects/88/cd40cdbfd978b47ac591dec5f4c432b5a17ec5": "1e99f63c435bf6d52ba52caad3d3a81e",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/8b/6b9e0ad5580b835229e26a57ed702c65219bec": "f76860d50ad083a92f3c7d56aca1c951",
".git/objects/8c/f1e68020f8c3da0da593b587302e6385cf2ca5": "c502183fd03f948986fadd860c8c0d43",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/b96427a45b53d5ef6190304a280fbeefe997ea": "66202f9d9a25547bccbbee4405a917c0",
".git/objects/91/f88fed4942be4800b3634580d3c789b8177115": "70bcf2d0365e9f85e3e605b8de68b06e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/95e0295623e5fc80e4062b5c0be76299f8ab01": "cc852cff43c18a138c2082ace85414ad",
".git/objects/96/a9fa00c684326f285323c0a9689b2904142aa4": "4ac760c85ca70aafb4bfe9317a558024",
".git/objects/a3/9cb7be3c17eea9c7747a4ffafc333e79626515": "7d83a4da5103789b86e05c578d1624b3",
".git/objects/a6/8026e65e9dde7f354a629c94951658ad0f9b6e": "82dfc596e74a58d7d3500fc376487f4f",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/6363e8e90d83dcb13e1c3054c84ee31dc0de6b": "33f227af39b13d01fa680d2d5f00458d",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b4/07b814b57de343079fd703615a3b06d2183db2": "a4b8854718c2ecf4613f5ff60ec9bf9d",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c0/7c974cfbf9cab5ace05413d293e26040346d91": "4672919bb041e2d438f256d113c60fec",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/2359c280495dc0d4804871ae45ed86e051db66": "8c7ef98c98d254ede04dc4644406df09",
".git/objects/d0/054d91ed1da9454c319511a00a6428f4f88170": "93a80152a067ba29f59899c70f9f0f8d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/aa8119d50f383af721c2272547791c9d8d0b7e": "861530ab499bd1e988ed695fa7e50579",
".git/objects/d7/5a555f99418f26924b897c03350cde9cfcbc15": "346b8ab4a050a90cb193435cbea642a1",
".git/objects/d7/9e5adb2fd5c3c6cdc63bf5d2c9481bf9bc0a93": "5c0ea921e51f7412d7e5b2b65bde4662",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/6dcbc9ea468059525f62c0a8550f6a7967f41f": "5ff4b3fedc6a9c8036813ea210e5f965",
".git/objects/db/d5ee556c586dfdca62991b1bc0fed7b3ab21c9": "93dc947ecd1f8a51c838308a723e553d",
".git/objects/df/d2fa0db39cd7eb11a7e2024770ffbbcf996cb2": "c23cb0cf2c501929785420baabb643fd",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e4/7f51eeb556a821d02989532bd67273d899b6aa": "d551874b3d5d164af4ef00a06ab3caea",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/ea/a856e857ddec76b6d92accfdfc7ab41a98cc48": "9b43eaf01ae94508ea1c06eff171f3b4",
".git/objects/ef/29b5deaf0e0356981b86f7a8a35383b9221d54": "29440663e88d4b0c5a02c6a68dbed875",
".git/objects/f2/4b59ff1fe5e625e5d0f8d7cb0b9deb1d3efcd7": "c570511092686a3e6f23c02893f8c679",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/master": "2594689a059d64f08c39dead7b1848b9",
".git/refs/remotes/origin/master": "2594689a059d64f08c39dead7b1848b9",
"assets/AssetManifest.bin": "ab088f1b398a7cdf073947e76339d07c",
"assets/AssetManifest.bin.json": "52c062e843f91a2b5588a6f4fc7f8bd3",
"assets/assets/document/color.json": "40c689b3b66ffbb34f8c77fe35a0dd52",
"assets/assets/document/colors.json": "ad0d908159225e90dc1924b63c073f50",
"assets/assets/document/language/en.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/document/language/zh.json": "a23c3d641c6a66e043db4845f6987a2c",
"assets/assets/document/language.json": "561178a5945117a9dff9c4461501432e",
"assets/assets/document/register.json": "96e45b3cf3c2c10490ce1700fca3b2ae",
"assets/assets/document/system.json": "d904d5b4bd61c915714a4b2e15b9a1a6",
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
"assets/fonts/MaterialIcons-Regular.otf": "69edbd37f587b978fb6b3d5345b0ec1d",
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
"flutter_bootstrap.js": "85ac9696828503aa71098d6e80c7487b",
"icons/Icon-192.png": "9d46aa2a54bafa42c57a3a9baf67ac3b",
"icons/Icon-512.png": "71c950d19dca5dbf2069680a89581185",
"icons/Icon-maskable-192.png": "9d46aa2a54bafa42c57a3a9baf67ac3b",
"icons/Icon-maskable-512.png": "71c950d19dca5dbf2069680a89581185",
"index.html": "7ef32b886864cbd47a4546cf58f65dd2",
"/": "7ef32b886864cbd47a4546cf58f65dd2",
"main.dart.js": "3704ff4575389f43b44ec8859a9aaba8",
"manifest.json": "22ee62b80529bb7d7d9e056b28bbe3e3",
"splash/img/dark-1x.png": "9d46aa2a54bafa42c57a3a9baf67ac3b",
"splash/img/dark-2x.png": "ab748a10b784b55864b321a9923539db",
"splash/img/dark-3x.png": "f1d1fef87553730c01b99c03805e06de",
"splash/img/dark-4x.png": "f4e6d62d46ff0929d813ad3240ff59b8",
"splash/img/light-1x.png": "9d46aa2a54bafa42c57a3a9baf67ac3b",
"splash/img/light-2x.png": "ab748a10b784b55864b321a9923539db",
"splash/img/light-3x.png": "f1d1fef87553730c01b99c03805e06de",
"splash/img/light-4x.png": "f4e6d62d46ff0929d813ad3240ff59b8",
"version.json": "7c4a6fa943993ad41b6738146d8bc0a9"};
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

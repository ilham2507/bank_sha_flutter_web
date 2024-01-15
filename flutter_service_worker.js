'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c05b6544e5dbe45b0d32180debee81a4",
"assets/AssetManifest.bin.json": "c03038bb5b1e394254883acccea08bf0",
"assets/AssetManifest.json": "0aa4b8a01edf03f5f34671fee5b5d91c",
"assets/assets/ic_check.png": "0ad8b19231002185c77222f622666f41",
"assets/assets/ic_edit_profile.png": "f5ba8a4ea4c959b579a63fd40b466fbd",
"assets/assets/ic_help.png": "c57dd9639ccea221c569a76db776db54",
"assets/assets/ic_history.png": "fd387d7b8b52c76a14c64f47a1732625",
"assets/assets/ic_logout.png": "0a70bf2c5edaa0fff8549c075e774227",
"assets/assets/ic_more.png": "42d9e180b5ab1512ebe7601a81d4060a",
"assets/assets/ic_my_rewards.png": "2d692102dfd150f526f288d3f8f367b5",
"assets/assets/ic_overview.png": "b65846d378ddf70be371e48292c92165",
"assets/assets/ic_pin.png": "ddac695cbc8c075d6cb77e1f71715694",
"assets/assets/ic_plus_circle.png": "3aff1f438d0ad024ab276e89fc8bb5e2",
"assets/assets/ic_product_data.png": "931843060ddd581d1396562c1ccc604e",
"assets/assets/ic_product_food.png": "a68ff7ab88f8aee1c8cdd014895af411",
"assets/assets/ic_product_movie.png": "62faa4371efacd5e752aa6982763fd7c",
"assets/assets/ic_product_stream.png": "fcd060dff71700d78fdf1ac7afb5ffc0",
"assets/assets/ic_product_travel.png": "89e4d470e182f0c410bcf8d94b2c17dd",
"assets/assets/ic_product_water.png": "2ba8cc47fc8e04e951147c47cd853a2e",
"assets/assets/ic_reward.png": "31dc016af8891a2ef96234faa9a35119",
"assets/assets/ic_send.png": "00f2dd0b758bbd1906a860b6dcf02504",
"assets/assets/ic_statistic.png": "02ebd50548e06c035005396f365b0108",
"assets/assets/ic_topup.png": "43b0127ea86a5260b85ee77bd1c19278",
"assets/assets/ic_transaction_cat1.png": "f806e882b6736603bf8ff5e477917133",
"assets/assets/ic_transaction_cat2.png": "0e3bf23c5bcfed108046951b26caec5f",
"assets/assets/ic_transaction_cat3.png": "797702d241bb71361a1996325ce7b1f2",
"assets/assets/ic_transaction_cat4.png": "1fd592947efa77492e5fa9f5ed08a1d0",
"assets/assets/ic_transaction_cat5.png": "cd8f08d5dc70318fd22bfc3ce86c4638",
"assets/assets/ic_upload.png": "0883359a9de98c29b0df02b6b24b216e",
"assets/assets/ic_wallet.png": "c9a3e204b18106cd4778e8fa320a6231",
"assets/assets/ic_withdraw.png": "193b45648c36b344e40a923b2332cf30",
"assets/assets/img_bank_bca.png": "09b14efda11e45e85cba9e86f2b05eb4",
"assets/assets/img_bank_bni.png": "578bdf56bf3117fddf7ab5ee4ee87f09",
"assets/assets/img_bank_mandiri.png": "9ef56026c258a5f312db7dfc21e0b8a3",
"assets/assets/img_bank_ocbc.png": "57e41b62cbd5aa91d5f90a816ee436f1",
"assets/assets/img_bg_card.png": "6989d0669fb8521a9df6b833adab5ade",
"assets/assets/img_friend1.png": "5b073bd0bd78d85cce5fa8349aedc241",
"assets/assets/img_friend2.png": "ae676052861b214035c50bc71eb65f33",
"assets/assets/img_friend3.png": "1999e934778186d7f4eee8aff13b3eb1",
"assets/assets/img_friend4.png": "d5c66d534617257715b5ac8e88ef5213",
"assets/assets/img_logo_dark.png": "db8ce565fb279d125418cb5acea95185",
"assets/assets/img_logo_light.png": "6738e0f609c363914624021a85a4937f",
"assets/assets/img_onboarding1.png": "e0f65f3a19e3140c0ef22027a3ef1582",
"assets/assets/img_onboarding2.png": "2dd7038c399d04c35412b13097bcd11e",
"assets/assets/img_onboarding3.png": "dd193e8e9da91d4b07b3663f042a5a75",
"assets/assets/img_profile.png": "26d8a4171f7137772255ecf0fcacd817",
"assets/assets/img_provider_indosat.png": "5d359ce7bfddc9e568d5bfaa99d62fd5",
"assets/assets/img_provider_singtel.png": "cfcf350669bb1538defc1bd706c34ed0",
"assets/assets/img_provider_telkomsel.png": "fc9d4c471ebeea097eb935a70336dbbd",
"assets/assets/img_tips1.png": "3e51166ec7772cfa89094ca19c551758",
"assets/assets/img_tips2.png": "65f1230999d4d316254afc628c96e71a",
"assets/assets/img_tips3.png": "01e89fef92472c102037fb6d6460588a",
"assets/assets/img_tips4.png": "923f22d88c8414cac3fff517b4e9560a",
"assets/assets/img_wallet.png": "e8f730f550e88fe4bc2d7e418481aff1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "38eca74329d9f52960e6fc8ba088cf4d",
"assets/NOTICES": "0176b19d20c9d935f071b9108b851446",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c446cb765a3c960070198d3ad5b45fae",
"/": "c446cb765a3c960070198d3ad5b45fae",
"main.dart.js": "a916c2f075c0b742540245a3121fa33b",
"manifest.json": "f29c02feb5be33755eb84e27ac28626a",
"version.json": "764751413bc67fd49ce15e463d0d2001"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["class.js","8f33f0d9d00ea299f0f10a29b933eac5"],["images/icons.json","5dbbc3fe59816e65ba28e355a58ea45c"],["images/logo.jpg","3edf01bcfbc27a14b193ccf3d976bcd8"],["images/windows11/LargeTile.scale-100.png","73434314d162884dc9078d703fe7bcfd"],["images/windows11/LargeTile.scale-125.png","fe53c6a5eff35a0055e433a8c89390bf"],["images/windows11/LargeTile.scale-150.png","4b181ec0d22bbf518cc3843f3d8240c3"],["images/windows11/LargeTile.scale-200.png","d852c9e1fa0e6f0ed3f58f6e0193b9b1"],["images/windows11/LargeTile.scale-400.png","5b9cd8117323497efafcb04690545c27"],["images/windows11/SmallTile.scale-100.png","8b5632b3d4bc8ab9152c320534e8c5f7"],["images/windows11/SmallTile.scale-125.png","3d635f769c686e5cb8b766dcd3860a93"],["images/windows11/SmallTile.scale-150.png","25dbe5cec2d5281621bcbf47c804f8aa"],["images/windows11/SmallTile.scale-200.png","50e709a35d18a4b71f7b03c53c79f1f6"],["images/windows11/SmallTile.scale-400.png","e67f0a99495f9419dcb73fc79e8999c2"],["images/windows11/SplashScreen.scale-100.png","af5bb23c797116b7a3ba7625aad6ab1c"],["images/windows11/SplashScreen.scale-125.png","d5e29c28c0f3c4a5d470b7637abe5723"],["images/windows11/SplashScreen.scale-150.png","d807f83ebbe416e6d90da9965616a331"],["images/windows11/SplashScreen.scale-200.png","889b3ce4e468e9607c2b27a0dc5182ac"],["images/windows11/SplashScreen.scale-400.png","f039305ea281d2a22511fddf1be34e42"],["images/windows11/Square150x150Logo.scale-100.png","e9b0f62de5e062b48c376c6fb6fa915a"],["images/windows11/Square150x150Logo.scale-125.png","a1e1f5e62102fbb5d1da603ccf1806ca"],["images/windows11/Square150x150Logo.scale-150.png","4a10dfd69f5ad89e64c0fdfb5a26497a"],["images/windows11/Square150x150Logo.scale-200.png","5df1b19838d6153ce06896d419cc8777"],["images/windows11/Square150x150Logo.scale-400.png","72a06eca3e20d80035d03ae4a23952e4"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png","61baa646ed9211311f09eea6b1fca8ad"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png","1fe2e5f3f9aa9eecf154f6ad1701a258"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png","1e10a385957f02669cf68b8c7312d455"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png","bc6deb8964c8a61508fd0b53dd68e523"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png","e8caca2ce012cabdce04d13708dd45a1"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png","e73685160f108afa3fac121aee334f54"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png","603bc29a6d479c600e92815e60fe1223"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png","928a3326365b469795c22e89d3f2c7f6"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png","bd34c51c8abb4f333c9d7ce7e318bf9b"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png","caf5d7064714188afa40d7d404913581"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png","85d7b83cf8f24675666bbd646a623d08"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png","be9f56d372da892f7a6de13242036318"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png","7a4c960c548c375d95cb68d454c92e84"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png","737f2fd5fa8fa6fa73f71075a8b8b506"],["images/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png","375dd62d07754a3c3d4a612d40a7701d"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-16.png","61baa646ed9211311f09eea6b1fca8ad"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-20.png","1fe2e5f3f9aa9eecf154f6ad1701a258"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-24.png","1e10a385957f02669cf68b8c7312d455"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-256.png","bc6deb8964c8a61508fd0b53dd68e523"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-30.png","e8caca2ce012cabdce04d13708dd45a1"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-32.png","e73685160f108afa3fac121aee334f54"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-36.png","603bc29a6d479c600e92815e60fe1223"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-40.png","928a3326365b469795c22e89d3f2c7f6"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-44.png","bd34c51c8abb4f333c9d7ce7e318bf9b"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-48.png","caf5d7064714188afa40d7d404913581"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-60.png","85d7b83cf8f24675666bbd646a623d08"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-64.png","be9f56d372da892f7a6de13242036318"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-72.png","7a4c960c548c375d95cb68d454c92e84"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-80.png","737f2fd5fa8fa6fa73f71075a8b8b506"],["images/windows11/Square44x44Logo.altform-unplated_targetsize-96.png","375dd62d07754a3c3d4a612d40a7701d"],["images/windows11/Square44x44Logo.scale-100.png","bd34c51c8abb4f333c9d7ce7e318bf9b"],["images/windows11/Square44x44Logo.scale-125.png","dc6ee9a673065da389ee7d755ac5f07e"],["images/windows11/Square44x44Logo.scale-150.png","5676f3eb133d07a11f6f56724884241c"],["images/windows11/Square44x44Logo.scale-200.png","d37fa20a2c13011df5ec0b0b43c6a628"],["images/windows11/Square44x44Logo.scale-400.png","ffbdcd0fda41be9a2991230972efa6bf"],["images/windows11/Square44x44Logo.targetsize-16.png","61baa646ed9211311f09eea6b1fca8ad"],["images/windows11/Square44x44Logo.targetsize-20.png","1fe2e5f3f9aa9eecf154f6ad1701a258"],["images/windows11/Square44x44Logo.targetsize-24.png","1e10a385957f02669cf68b8c7312d455"],["images/windows11/Square44x44Logo.targetsize-256.png","bc6deb8964c8a61508fd0b53dd68e523"],["images/windows11/Square44x44Logo.targetsize-30.png","e8caca2ce012cabdce04d13708dd45a1"],["images/windows11/Square44x44Logo.targetsize-32.png","e73685160f108afa3fac121aee334f54"],["images/windows11/Square44x44Logo.targetsize-36.png","603bc29a6d479c600e92815e60fe1223"],["images/windows11/Square44x44Logo.targetsize-40.png","928a3326365b469795c22e89d3f2c7f6"],["images/windows11/Square44x44Logo.targetsize-44.png","bd34c51c8abb4f333c9d7ce7e318bf9b"],["images/windows11/Square44x44Logo.targetsize-48.png","caf5d7064714188afa40d7d404913581"],["images/windows11/Square44x44Logo.targetsize-60.png","85d7b83cf8f24675666bbd646a623d08"],["images/windows11/Square44x44Logo.targetsize-64.png","be9f56d372da892f7a6de13242036318"],["images/windows11/Square44x44Logo.targetsize-72.png","7a4c960c548c375d95cb68d454c92e84"],["images/windows11/Square44x44Logo.targetsize-80.png","737f2fd5fa8fa6fa73f71075a8b8b506"],["images/windows11/Square44x44Logo.targetsize-96.png","375dd62d07754a3c3d4a612d40a7701d"],["images/windows11/StoreLogo.scale-100.png","7ee62b3c5b7994256e4f377b423f667e"],["images/windows11/StoreLogo.scale-125.png","3c3aa085f9153e9af42727930c8cfad9"],["images/windows11/StoreLogo.scale-150.png","e216f1643efc3f64bca539e47abfddd2"],["images/windows11/StoreLogo.scale-200.png","f6c7bfb0ac7af034917f5b21ea3d7893"],["images/windows11/StoreLogo.scale-400.png","1ee2ed3a1216f201f8bcfcc266d884ff"],["images/windows11/Wide310x150Logo.scale-100.png","3a3d04910a70b800d92a66a63ee09e8c"],["images/windows11/Wide310x150Logo.scale-125.png","7115efd8acaaa1fe1ea1b5a42aba8736"],["images/windows11/Wide310x150Logo.scale-150.png","caff2b97d946467463f0454d5583cc5c"],["images/windows11/Wide310x150Logo.scale-200.png","af5bb23c797116b7a3ba7625aad6ab1c"],["images/windows11/Wide310x150Logo.scale-400.png","889b3ce4e468e9607c2b27a0dc5182ac"],["index.html","b682b246425ee12df0bbb1023ada18b3"],["js/script.js","1ae2c5f406f6c2463776c4d45e4f2b00"],["manifest.json","1d1d64a10e5571a87dfb2ebe576e8ce2"],["objects.js","31d40dfe22b9783f49544e3783a031f2"],["style.css","d68f1f683e55db5e1e036d209b0747d8"],["sw.js","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








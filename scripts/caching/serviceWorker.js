const cacheName = 'pwa-Cache';

const filesToCache = [
    '/Laba_PVI/content/home.html',
    '/Laba_PVI/additionalContent/newStudent.html',
    '/Laba_PVI/additionalContent/studentsTable.html',
    '/Laba_PVI/additionalContent/dialog/deleteStudentDialog.html',
    '/Laba_PVI/additionalContent/dialog/newStudentDialog.html',
    '/Laba_PVI/styles/animationStyles.css',
    '/Laba_PVI/styles/dialogs.css',
    '/Laba_PVI/styles/generalStyles.css',
    '/Laba_PVI/styles/navBarStyles.css',
    '/Laba_PVI/styles/navigationListStyles.css',
    '/Laba_PVI/styles/studentsPageStyles.css',
    '/Laba_PVI/scripts/dialogScripts.js',
    '/Laba_PVI/scripts/lab3.js',
    '/Laba_PVI/scripts/navigationList.js',
    '/Laba_PVI/scripts/navMenuHoversEvents.js',
    '/Laba_PVI/scripts/tableScripts.js',
];

self.addEventListener('activate', function(event) {
    console.log('Claiming control');
    return self.clients.claim();
});
self.addEventListener('fetch', function (event) {
    console.log('Fetch working!');
    event.respondWith(
        fetch(event.request).catch(function () {
            console.log('Fetch error:', event.request);
            return caches.match(event.request);
        })
    );
});
self.addEventListener('install', function (event) {
    console.log('ServiceWorker installing.');
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                console.log('ServiceWorker caching app shell.');
                return cache.addAll(filesToCache);
            })
    );
});
// self.ready.then(function (registration) {
//     registration.active.addEventListener('fetch', function (event) {
//         console.log('Fetch working!');
//         event.respondWith(
//             fetch(event.request).catch(function () {
//                 console.log('Fetch error:', event.request);
//                 return caches.match(event.request);
//             })
//         );
//     });
//     registration.active.addEventListener('install', function (event) {
//         console.log('ServiceWorker installing.');
//         event.waitUntil(
//             caches.open(cacheName)
//                 .then(function (cache) {
//                     console.log('ServiceWorker caching app shell.');
//                     //return cache.addAll(filesToCache1);
//                 })
//         );
//     });
// }).catch(function (error) {
//     console.error('Error during service worker registration:', error);
// });




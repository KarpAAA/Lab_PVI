const cacheName = 'pwa-Cache';

const filesToCache = [
    '../content/home.html',
    '../additionalContent/newStudent.html',
    '../additionalContent/studentsTable.html',
    '../additionalContent/dialog/deleteStudentDialog.html',
    '../additionalContent/dialog/newStudentDialog.html',
    '../styles/animationStyles.css',
    '../styles/dialogs.css',
    '../styles/generalStyles.css',
    '../styles/navBarStyles.css',
    '../styles/navigationListStyles.css',
    '../styles/studentsPageStyles.css',
    '../scripts/dialogScripts.js',
    '../scripts/lab3.js',
    '../scripts/navigationList.js',
    '../scripts/navMenuHoversEvents.js',
    '../scripts/tableScripts.js',
];

self.addEventListener('activate', function(event) {
    console.log('Claiming control');
    return self.clients.claim();
});
self.addEventListener('fetch', function (event) {
    console.log('Fetch working!');
    event.respondWith(
        fetch(event.request).catch(function () {
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




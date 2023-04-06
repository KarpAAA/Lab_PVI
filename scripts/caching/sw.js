const cacheName = 'pwaCache';
const filesToCache = [
    '/content/home.html',
    '/additionalContent/newStudent.html',
    '/additionalContent/studentsTable.html',
    '/additionalContent/dialog/deleteStudentDialog.html',
    '/additionalContent/dialog/newStudentDialog.html',
    '/styles/animationStyles.css',
    '/styles/dialogs.css',
    '/styles/generalStyles.css',
    '/styles/navBarStyles.css',
    '/styles/navigationListStyles.css',
    '/styles/studentsPageStyles.css',
    '/scripts/dialogScripts.js',
    '/scripts/lab3.js',
    '/scripts/navigationList.js',
    '/scripts/navMenuHoversEvents.js',
    '/scripts/tableScripts.js',
];

self.addEventListener('install',  event => {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('Service Worker caching app shell.');
                return cache.addAll(filesToCache);
            })
    );
});




self.addEventListener('fetch', event => {
    console.log('Fetch' + event.request)
    event.respondWith(cacheFirst(event.request));
});
async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
}
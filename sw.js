const cache_key = "cache-v1";

const filesToCache = [
    './home.html',
    './additionalContent/newStudent.html',
    './additionalContent/studentsTable.html',
    './additionalContent/dialog/deleteStudentDialog.html',
    './additionalContent/dialog/newStudentDialog.html',
    './styles/animationStyles.css',
    './styles/dialogs.css',
    './styles/generalStyles.css',
    './styles/navBarStyles.css',
    './styles/navigationListStyles.css',
    './styles/studentsPageStyles.css',
    './scripts/dialogScripts.js',
    './scripts/lab3.js',
    './scripts/navigationList.js',
    './scripts/navMenuHoversEvents.js',
    './scripts/tableScripts.js'
];
const initCache = () => {
    return caches.open(cache_key).then( (cache) => {
        return cache.addAll(filesToCache);
    }, (error) =>{
        console.log(error);
    })
}



self.addEventListener('install', (e) => {
 console.log("Installing");
 e.waitUntil(initCache());
});



self.addEventListener('fetch', function (event) {

    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});


// const tryNetwork = (req, timeout) =>{
//     console.log(req);
//     return new Promise((resolve,reject) =>{
//         const timeoutId = setTimeout(reject,timeout);
//         fetch(req).then( (res) => {
//             clearTimeout(timeoutId);
//             const responseClone = res.clone();
//             caches.open(cache_key).then((cache) => {
//                 cache.put(req,responseClone);
//             })
//             resolve(res);
//         },reject);
//     });
// };
// const getFromCache = (req) => {
//     console.log("network is off so getting from cache...");
//     return caches.open(cache_key).then( (cache) => {
//         return caches.match(req).then( (result) => {
//             return result || Promise.reject("no-match");
//         });
//     });
// };
// self.addEventListener('activate', (e) => {
//     e.waitUntil(
//         caches.keys().then((keyList) => {
//             return Promise.all(keyList.map((key) => {
//                 if(key !== cache_key){
//                     return caches.delete(key);
//                 }
//             }));
//         })
//     );
// });

// self.addEventListener('fetch', (e) => {
//     console.log("Try network and store result or get data from cache");
//     e.respondWith(tryNetwork(e.request, 400).catch( () => {
//         getFromCache(e.request)
//     }));
// });
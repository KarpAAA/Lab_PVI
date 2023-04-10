$(document).ready(function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../scripts/caching/serviceWorker.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);

            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed: ', error);
            });
    } else {
        console.log('Service workers are not supported.');
    }
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../scripts/serviceWorker.js')
            .then(function (registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);

            })
            .catch(function (error) {
                console.log('ServiceWorker registration failed: ', error);
            });
    });

} else {
    console.log('Service workers are not supported.');
}
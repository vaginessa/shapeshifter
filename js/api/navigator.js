(function() {
    'use strict';
    
    Object.defineProperties(Navigator.prototype, {
        /*
        activeVRDisplays: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        appCodeName: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        appName: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        appVersion: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        /*
        battery: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        connection: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        geolocation: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        hardwareConcurrency: {
            value: randomNumber(0, 9),
            configurable: false,
            enumerable: true,
            writable: false
        },
        /*
        javaEnabled: {
            value: randomBoolean(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        language: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        languages: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        mimeTypes: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        onLine: {
            value: randomBoolean(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        oscpu: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        /*
        permissions: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        platform: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        plugins: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        product: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        /*
        serviceWorker: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        storage: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        userAgent: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
})();
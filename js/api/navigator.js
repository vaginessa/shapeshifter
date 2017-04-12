(function() {
    'use strict';
    
    var navigator = window.navigator;
    
    var modifiedNavigator;
    
    if ('userAgent' in Navigator.prototype) {
        // Chrome 43+ moved all properties from navigator to the prototype,
        // so we have to modify the prototype instead of navigator.
        modifiedNavigator = Navigator.prototype;
    }
    else {
        // Chrome 42- defined the property on navigator.
        modifiedNavigator = Object.create(navigator);
        
        Object.defineProperty(window, 'navigator', {
            value: modifiedNavigator,
            configurable: false,
            enumerable: false,
            writable: false
        });
    }
    
    //Navigator.prototype.testValue = "Hello World";
    
    Object.defineProperties(modifiedNavigator, {
        /*
        activeVRDisplays: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        appCodeName: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        },
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
            value: randomNumber(0, 256),
            configurable: false,
            enumerable: true,
            writable: false
        },
        /*
        javaEnabled: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
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
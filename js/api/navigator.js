(function() {
    'use strict';
    
    function fakeActiveVRDisplays() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.activeVRDisplays");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeAppCodeName() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.appCodeName");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeAppName() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.appName");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeAppVersion() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.appVersion");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    // TODO: This is getBattery() now
    function fakeBattery() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.battery");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeConnection() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.connection");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeGeoLocation() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.geolocation");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeHardwareConcurrency() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.hardwareConcurrency");
        
        return randomNumber(0, 9);
    }
    
    // TODO: javaEnabled() is a method, not a property
    function fakeJavaEnabled() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.javaEnabled");
        
        return randomBoolean();
    }
    
    function fakeLanguage() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.language");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeLanguages() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.languages");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeMimeTypes() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.mimeTypes");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeOnLine() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.onLine");
        
        return randomBoolean();
    }
    
    function fakeOscpu() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.oscpu");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakePermissions() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.permissions");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakePlatform() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.platform");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakePlugins() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.plugins");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeProduct() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.product");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeServiceWorker() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.serviceWorker");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeStorage() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.storage");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    function fakeUserAgent() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.userAgent");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    Object.defineProperties(Navigator.prototype, {
        /*
        activeVRDisplays: {
            value: fakeActiveVRDisplays(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        appCodeName: {
            value: fakeAppCodeName(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        appName: {
            value: fakeAppName(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        appVersion: {
            value: fakeAppVersion(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        /*
        battery: {
            value: fakeBattery(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        connection: {
            value: fakeConnection(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        geolocation: {
            value: fakeGeoLocation(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        hardwareConcurrency: {
            value: fakeHardwareConcurrency(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        /*
        javaEnabled: {
            value: fakeJavaEnabled(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        language: {
            value: fakeLanguage(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        languages: {
            value: fakeLanguages(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        mimeTypes: {
            value: fakeMimeTypes(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        onLine: {
            value: fakeOnLine(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        oscpu: {
            value: fakeOscpu(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        /*
        permissions: {
            value: fakePermissions(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        platform: {
            value: fakePlatform(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        plugins: {
            value: fakePlugins(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        product: {
            value: fakeProduct(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        /*
        serviceWorker: {
            value: fakeServiceWorker(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        storage: {
            value: fakeStorage(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        */
        userAgent: {
            value: fakeUserAgent(),
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
})();
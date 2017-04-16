(function() {
    'use strict';
    
    const fakeActiveVRDisplaysValue       = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeAppCodeNameValue            = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeAppNameValue                = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeAppVersionValue             = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeBatteryValue                = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeConnectionValue             = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeGeoLocationValue            = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeHardwareConcurrencyValue    = randomNumber(0, 9);
    const fakeJavaEnabledValue            = randomBoolean();
    const fakeLanguageValue               = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeLanguagesValue              = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeMimeTypesValue              = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeOnLineValue                 = randomBoolean();
    const fakeOscpuValue                  = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakePermissionsValue            = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakePlatformValue               = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakePluginsValue                = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeProductValue                = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeServiceWorkerValue          = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeStorageValue                = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const fakeUserAgentValue              = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
    Object.defineProperties(window.navigator, {
        /*
        activeVRDisplays: {
            configurable: false,
            enumerable: true,
            get: function fakeActiveVRDisplays() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.activeVRDisplays");
        
                return fakeActiveVRDisplaysValue;
            }
        },
        appCodeName: {
            configurable: false,
            enumerable: true,
            get: function fakeAppCodeName() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.appCodeName");
        
                return fakeAppCodeNameValue;
            }
        },
        */
        
        appName: {
            configurable: false,
            enumerable: true,
            get: function fakeAppName() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.appName");
        
                return fakeAppNameValue;
            }
        },
        appVersion: {
            configurable: false,
            enumerable: true,
            get: function fakeAppVersion() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.appVersion");
        
                return fakeAppVersionValue;
            }
        },
        
        // TODO: This is getBattery() now
        /*
        battery: {
            configurable: false,
            enumerable: true,
            get: function fakeBattery() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.battery");
        
                return fakeBatteryValue;
            }
        },
        connection: {
            configurable: false,
            enumerable: true,
            get: function fakeConnection() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.connection");
        
                return fakeConnectionValue;
            }
        },
        geolocation: {
            configurable: false,
            enumerable: true,
            get: function fakeGeoLocation() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.geolocation");
        
                return fakeGeoLocationValue;
            }
        },
        */
        
        hardwareConcurrency: {
            configurable: false,
            enumerable: true,
            get: function fakeHardwareConcurrency() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.hardwareConcurrency");
        
                return fakeHardwareConcurrencyValue;
            }
        },
        
        // TODO: javaEnabled() is a method, not a property
        /*
        javaEnabled: {
            configurable: false,
            enumerable: true,
            get: function fakeJavaEnabled() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.javaEnabled");
        
                return fakeJavaEnabledValue;
            }
        },
        */
        
        language: {
            configurable: false,
            enumerable: true,
            get: function fakeLanguage() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.language");
        
                return fakeLanguageValue;
            }
        },
        languages: {
            configurable: false,
            enumerable: true,
            get: function fakeLanguages() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.languages");
        
                return fakeLanguagesValue;
            }
        },
        mimeTypes: {
            configurable: false,
            enumerable: true,
            get: function fakeMimeTypes() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.mimeTypes");
        
                return fakeMimeTypesValue;
            }
        },
        onLine: {
            configurable: false,
            enumerable: true,
            get: function fakeOnLine() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.onLine");
        
                return fakeOnLineValue;
            }
        },
        oscpu: {
            configurable: false,
            enumerable: true,
            get: function fakeOscpu() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.oscpu");
        
                return fakeOscpuValue;
            }
        },
        
        /*
        permissions: {
            configurable: false,
            enumerable: true,
            get: function fakePermissions() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.permissions");
        
                return fakePermissionsValue;
            }
        },
        */
        
        platform: {
            configurable: false,
            enumerable: true,
            get: function fakePlatform() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.platform");
        
                return fakePlatformValue;
            }
        },
        plugins: {
            configurable: false,
            enumerable: true,
            get: function fakePlugins() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.plugins");
        
                return fakePluginsValue;
            }
        },
        product: {
            configurable: false,
            enumerable: true,
            get: function fakeProduct() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.product");
        
                return fakeProductValue;
            }
        },
        
        /*
        serviceWorker: {
            configurable: false,
            enumerable: true,
            get: function fakeServiceWorker() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.serviceWorker");
        
                return fakeServiceWorkerValue;
            }
        },
        storage: {
            configurable: false,
            enumerable: true,
            get: function fakeStorage() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.storage");
        
                return fakeStorageValue;
            }
        },
        */
        
        userAgent: {
            configurable: false,
            enumerable: true,
            get: function fakeUserAgent() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.userAgent");
                
                return fakeUserAgentValue;
            }
        }
            });
})();
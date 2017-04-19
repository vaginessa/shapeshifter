(function() {
    'use strict';
    
    function fakeActiveVRDisplays(origin) {       Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeAppCodeName(origin) {            Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeAppName(origin) {                Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeAppVersion(origin) {             Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeBattery(origin) {                Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeConnection(origin) {             Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeGeoLocation(origin) {            Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeHardwareConcurrency(origin) {    Math.seedrandom(origin); return randomNumber(0, 9); }
    function fakeJavaEnabled(origin) {            Math.seedrandom(origin); return randomBoolean(); }
    function fakeLanguage(origin) {
        Math.seedrandom(origin);
    
        const language = languages[randomNumber(0, languages.length)];
    
        const languageParts = language.split("-");
    
        switch (languageParts.length) {
            case 2:
                return languageParts[0] + "-" + languageParts[1];
            case 3:
                // TODO: How to display Cyrillic or Latin versions of the same language???
        }
    }
    function fakeLanguages(origin) {
        Math.seedrandom(origin);
    
        const language = languages[randomNumber(0, languages.length)];
    
        const languageParts = language.split("-");
    
        switch (languageParts.length) {
            case 2:
                return languageParts[0] + "-" + languageParts[1] + "," + languageParts[0];
            case 3:
                // TODO: How to display Cyrillic or Latin versions of the same language???
        }
    }
    function fakeMimeTypes(origin) {              Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeOnLine(origin) {                 Math.seedrandom(origin); return randomBoolean(); }
    function fakeOscpu(origin) {                  Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakePermissions(origin) {            Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakePlatform(origin) {               Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakePlugins(origin) {                Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeProduct(origin) {                Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeServiceWorker(origin) {          Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeStorage(origin) {                Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    function fakeUserAgent(origin) {
        Math.seedrandom(origin);
        const randomBrowser = randomNumber(0, 5);
        switch (randomBrowser) {
            case 0:
                return ieUserAgents[randomNumber(0, ieUserAgents.length)];
            case 1:
                return firefoxUserAgents[randomNumber(0, firefoxUserAgents.length)];
            case 2:
                return chromeUserAgents[randomNumber(0, chromeUserAgents.length)];
            case 3:
                return safariUserAgents[randomNumber(0, safariUserAgents.length)];
            case 4:
                return operaUserAgents[randomNumber(0, operaUserAgents.length)];
        }
    }
                           
    const origin = window.location.hostname;
                           
    const fakeActiveVRDisplaysValue       = fakeActiveVRDisplays(origin);
    const fakeAppCodeNameValue            = fakeAppCodeName(origin);
    const fakeAppNameValue                = fakeAppName(origin);
    const fakeAppVersionValue             = fakeAppVersion(origin);
    const fakeBatteryValue                = fakeBattery(origin);
    const fakeConnectionValue             = fakeConnection(origin);
    const fakeGeoLocationValue            = fakeGeoLocation(origin);
    const fakeHardwareConcurrencyValue    = fakeHardwareConcurrency(origin);
    const fakeJavaEnabledValue            = fakeJavaEnabled(origin);
    const fakeLanguageValue               = fakeLanguage(origin);
    const fakeLanguagesValue              = fakeLanguages(origin);
    const fakeMimeTypesValue              = fakeMimeTypes(origin);
    const fakeOnLineValue                 = fakeOnLine(origin);
    const fakeOscpuValue                  = fakeOscpu(origin);
    const fakePermissionsValue            = fakePermissions(origin);
    const fakePlatformValue               = fakePlatform(origin);
    const fakePluginsValue                = fakePlugins(origin);
    const fakeProductValue                = fakeProduct(origin);
    const fakeServiceWorkerValue          = fakeServiceWorker(origin);
    const fakeStorageValue                = fakeStorage(origin);
    const fakeUserAgentValue              = fakeUserAgent(origin);                       
    
    Object.defineProperties(window.navigator, {
        /*
        activeVRDisplays: {
            configurable: false,
            enumerable: true,
            get: function getActiveVRDisplays() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.activeVRDisplays");
        
                return fakeActiveVRDisplaysValue;
            }
        },
        appCodeName: {
            configurable: false,
            enumerable: true,
            get: function getAppCodeName() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.appCodeName");
        
                return fakeAppCodeNameValue;
            }
        },
        */
        
        appName: {
            configurable: false,
            enumerable: true,
            get: function getAppName() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.appName");
        
                return fakeAppNameValue;
            }
        },
        appVersion: {
            configurable: false,
            enumerable: true,
            get: function getAppVersion() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.appVersion");
        
                return fakeAppVersionValue;
            }
        },
        
        // TODO: This is getBattery() now
        /*
        battery: {
            configurable: false,
            enumerable: true,
            get: function getBattery() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.battery");
        
                return fakeBatteryValue;
            }
        },
        connection: {
            configurable: false,
            enumerable: true,
            get: function getConnection() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.connection");
        
                return fakeConnectionValue;
            }
        },
        geolocation: {
            configurable: false,
            enumerable: true,
            get: function getGeoLocation() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.geolocation");
        
                return fakeGeoLocationValue;
            }
        },
        */
        
        hardwareConcurrency: {
            configurable: false,
            enumerable: true,
            get: function getHardwareConcurrency() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.hardwareConcurrency");
        
                return fakeHardwareConcurrencyValue;
            }
        },
        
        // TODO: javaEnabled() is a method, not a property
        /*
        javaEnabled: {
            configurable: false,
            enumerable: true,
            get: function getJavaEnabled() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.javaEnabled");
        
                return fakeJavaEnabledValue;
            }
        },
        */
        
        language: {
            configurable: false,
            enumerable: true,
            get: function getLanguage() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.language");
        
                return fakeLanguageValue;
            }
        },
        languages: {
            configurable: false,
            enumerable: true,
            get: function getLanguages() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.languages");
        
                return fakeLanguagesValue;
            }
        },
        mimeTypes: {
            configurable: false,
            enumerable: true,
            get: function getMimeTypes() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.mimeTypes");
        
                return fakeMimeTypesValue;
            }
        },
        onLine: {
            configurable: false,
            enumerable: true,
            get: function getOnLine() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.onLine");
        
                return fakeOnLineValue;
            }
        },
        oscpu: {
            configurable: false,
            enumerable: true,
            get: function getOscpu() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.oscpu");
        
                return fakeOscpuValue;
            }
        },
        
        /*
        permissions: {
            configurable: false,
            enumerable: true,
            get: function getPermissions() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.permissions");
        
                return fakePermissionsValue;
            }
        },
        */
        
        platform: {
            configurable: false,
            enumerable: true,
            get: function getPlatform() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.platform");
        
                return fakePlatformValue;
            }
        },
        plugins: {
            configurable: false,
            enumerable: true,
            get: function getPlugins() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.plugins");
        
                return fakePluginsValue;
            }
        },
        product: {
            configurable: false,
            enumerable: true,
            get: function getProduct() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.product");
        
                return fakeProductValue;
            }
        },
        
        /*
        serviceWorker: {
            configurable: false,
            enumerable: true,
            get: function getServiceWorker() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.serviceWorker");
        
                return fakeServiceWorkerValue;
            }
        },
        storage: {
            configurable: false,
            enumerable: true,
            get: function getStorage() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.storage");
        
                return fakeStorageValue;
            }
        },
        */
        
        userAgent: {
            configurable: false,
            enumerable: true,
            get: function getUserAgent() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Navigator.userAgent");
                
                return fakeUserAgentValue;
            }
        }
            });
})();
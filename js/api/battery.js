(function() {
    'use strict';
    
    function fakeCharging() {
        console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.charging");
        
        return randomBoolean();
    }
    
    function fakeChargingTime() {
        console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.chargingTime");
        
        return randomNumber(0, 9999);
    }
    
    function fakeDischargingTime() {
        console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.dischargingTime");
        
        return randomNumber(0, 9999);
    }
    
    // TODO: This could return any decimal number between 0 and 1, not just 0 or 1
    function fakeLevel() {
        console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.level");
        
        return randomNumber(0, 2);
    }
    
    Object.defineProperties(BatteryManager.prototype, {
        charging: {
            value: fakeCharging(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        
        // TODO: This value could be infinity, if device is not charging
        chargingTime: {
            value: fakeChargingTime(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        
        // TODO: This value could be infinity, if device is charging
        dischargingTime: {
            value: fakeDischargingTime(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        level: {
            value: fakeLevel(),
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
})();
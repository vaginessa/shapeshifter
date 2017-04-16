(function() {
    'use strict';
    
    const fakeChargingValue        = randomBoolean();
    const fakeChargingTimeValue    = randomNumber(0, 9999);
    const fakeDischargingValue     = randomNumber(0, 9999);
    const fakeLevelValue           = randomNumber(0, 2);
    
    Object.defineProperties(BatteryManager.prototype, {
        charging: {
            configurable: false,
            enumerable: true,
            get: function fakeCharging() {
                console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.charging");
        
                return fakeChargingValue;
            }
        },
        
        // TODO: This value could be infinity, if device is not charging
        chargingTime: {
            configurable: false,
            enumerable: true,
            get: function fakeChargingTime() {
                console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.chargingTime");
        
                return fakeChargingTimeValue;
            }
        },
        
        // TODO: This value could be infinity, if device is charging
        dischargingTime: {
            configurable: false,
            enumerable: true,
            get: function fakeDischargingTime() {
                console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.dischargingTime");
        
                return fakeDischargingValue;
            }
        },
        
        // TODO: This could return any decimal number between 0 and 1, not just 0 or 1
        level: {
            configurable: false,
            enumerable: true,
            get: function fakeLevel() {
                console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.level");
        
                return fakeLevelValue;
            }
        }
    });
})();
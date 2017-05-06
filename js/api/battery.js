(function() {
    'use strict';

    function fakeCharging(origin) {           Math.seedrandom(origin); return randomBoolean(); }
    function fakeChargingTime(origin) {       Math.seedrandom(origin); return randomNumber(0, 9999); }
    function fakeDischargingTime(origin) {    Math.seedrandom(origin); return randomNumber(0, 9999); }
    function fakeLevel(origin) {              Math.seedrandom(origin); return randomNumber(0, 2); }

    const origin = window.location.hostname;

    const fakeChargingValue        = fakeCharging(origin);
    const fakeChargingTimeValue    = fakeChargingTime(origin);
    const fakeDischargingValue     = fakeDischargingTime(origin);
    const fakeLevelValue           = fakeLevel(origin);

    Object.defineProperties(BatteryManager.prototype, {
        charging: {
            configurable: false,
            enumerable: true,
            get: function getCharging() {
                console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.charging");

                return fakeChargingValue;
            }
        },

        // TODO: This value could be infinity, if device is not charging
        chargingTime: {
            configurable: false,
            enumerable: true,
            get: function getChargingTime() {
                console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.chargingTime");

                return fakeChargingTimeValue;
            }
        },

        // TODO: This value could be infinity, if device is charging
        dischargingTime: {
            configurable: false,
            enumerable: true,
            get: function getDischargingTime() {
                console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.dischargingTime");

                return fakeDischargingValue;
            }
        },

        // TODO: This could return any decimal number between 0 and 1, not just 0 or 1
        level: {
            configurable: false,
            enumerable: true,
            get: function getLevel() {
                console.log("[ALERT] " + window.location.hostname + " accessed property BatteryManager.level");

                return fakeLevelValue;
            }
        }
    });
})();

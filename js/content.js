var actualCode =  '(' + function() {
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
    
    var ua = "";
    var length = 32;
    var charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	for (var i = 0; i < length; i++) {
		ua += charset[Math.floor(Math.random() * charset.length)];
	}
    
    // Pretend to be Windows XP
    Object.defineProperties(modifiedNavigator, {
        userAgent: {
            //value: navigator.userAgent.replace(/\([^)]+\)/, 'Windows Crapbox'),
            value: ua,
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
} + ')();';

var s = document.createElement('script');
s.textContent = actualCode;
document.documentElement.appendChild(s);
s.remove();
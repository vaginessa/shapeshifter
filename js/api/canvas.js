(function(){
    'use strict';
    
    var originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    
    HTMLCanvasElement.prototype.toDataURL = function(type, encoderOptions) {
        
        console.log("[ALERT] " + window.location.hostname + " called HTMLCanvasElement.toDataURL()");
        
        var originalDataURL = originalToDataURL.call(this, type, encoderOptions);
        
        // TODO: Add randomness by modifying random pixel values.
        // This will destroy the consistency of the hash calculation.
        
        return originalDataURL;
    };
    
    var originalToBlob = HTMLCanvasElement.prototype.toBlob;
    
    HTMLCanvasElement.prototype.toBlob = function(callback, mimeType, qualityArgument) {
        
        console.log("[ALERT] " + window.location.hostname + " called HTMLCanvasElement.toBlob()");
        
        var fakeCallback = function (blob) {
            
            // TODO: Add randomness by modifying random pixel values.
            // This will destroy the consistency of the hash calculation.
            
            callback(blob);
        };
        
        originalToBlob.call(this, fakeCallback, mimeType, qualityArgument);
    };
})();
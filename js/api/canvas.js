(function(){
    'use strict';
    
    var originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    
    HTMLCanvasElement.prototype.toDataURL = function(type, encoderOptions) {
        var originalCanvas = originalToDataURL.call(this, type, encoderOptions);
        
        // TODO: Add randomness by modifying random pixel values.
        // This will destroy the consistency of the hash calculation.
        
        return originalCanvas;
    };
    
    var originalToBlob = HTMLCanvasElement.prototype.toBlob;
    
    HTMLCanvasElement.prototype.toBlob = function(callback, mimeType, qualityArgument) {
        var fakeCallback = function (blob) {
            
            // TODO: Add randomness by modifying random pixel values.
            // This will destroy the consistency of the hash calculation.
            
            callback(blob);
        };
        
        originalToBlob.call(this, fakeCallback, mimeType, qualityArgument);
    };
})();
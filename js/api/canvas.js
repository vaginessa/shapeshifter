(function(){
    'use strict';

    var originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    var originalToBlob = HTMLCanvasElement.prototype.toBlob;
    var originalMozGetAsFile = HTMLCanvasElement.prototype.mozGetAsFile;
    var originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
    //var originalReadPixels = WebGLRenderingContext.prototype.readPixels;

    // TODO: This method runs for each different data access method
    // aka. toDataURL(), toBlob() etc. Could the value be cached for faster access?
    function randomiseImageData(image) {
        const origin = window.location.hostname;

        Math.seedrandom(origin);

        var length = image.data.length;

        var array = new Uint8ClampedArray(length);

        // TODO: Need a faster and more effective spoofing algorithm
        for (var i = 0; i < length; i++) {
            array[i] = image.data[i] + (randomBoolean() ? 1 : -1);
        }

        var modifiedImage = new ImageData(array, image.width, image.height);

        return modifiedImage;
    }

    CanvasRenderingContext2D.prototype.getImageData = function(sx, sy, sw, sh) {
        console.log("[ALERT] " + window.location.hostname + " called CanvasRenderingContext2D.getImageData()");

        // TODO: Is this line needed?
        const origin = window.location.hostname;

        var image = originalGetImageData.call(this, sx, sy, sw, sh);

        return randomiseImageData(image);
    };

    HTMLCanvasElement.prototype.toDataURL = function(type, encoderOptions) {
        console.log("[ALERT] " + window.location.hostname + " called HTMLCanvasElement.toDataURL()");

        var ctx = HTMLCanvasElement.prototype.getContext.call(this, "2d") ||
            HTMLCanvasElement.prototype.getContext.call(this, "webgl") ||
            HTMLCanvasElement.prototype.getContext.call(this, "experimental-webgl") ||
            HTMLCanvasElement.prototype.getContext.call(this, "webgl2") ||
            HTMLCanvasElement.prototype.getContext.call(this, "experimental-webgl2");

        if (ctx instanceof CanvasRenderingContext2D) { // For '2D' canvas. Only works with 2D for now.
            var image = originalGetImageData.call(ctx, 0, 0, this.width, this.height);

            var randomisedImage = randomiseImageData(image);

            ctx.putImageData(randomisedImage, 0, 0, 0, 0, this.width, this.height);
        }
        else if (ctx instanceof WebGLRenderingContext) {
            console.log("[INFO] WebGLRenderingContext spoofing not yet implemented");
        }
        else if (ctx instanceof WebGL2RenderingContext) {
            console.log("[INFO] WebGL2RenderingContext spoofing not yet implemented");
        }
        else if (ctx instanceof ImageBitmapRenderingContext) {
            console.log("[INFO] ImageBitmapRenderingContext spoofing not yet implemented");
        }

        return originalToDataURL.call(this, type, encoderOptions);
    };

    HTMLCanvasElement.prototype.toBlob = function(callback, mimeType, qualityArgument) {
        console.log("[ALERT] " + window.location.hostname + " called HTMLCanvasElement.toBlob()");

        var ctx = HTMLCanvasElement.prototype.getContext.call(this, "2d") ||
            HTMLCanvasElement.prototype.getContext.call(this, "webgl") ||
            HTMLCanvasElement.prototype.getContext.call(this, "experimental-webgl") ||
            HTMLCanvasElement.prototype.getContext.call(this, "webgl2") ||
            HTMLCanvasElement.prototype.getContext.call(this, "experimental-webgl2");

        if (ctx instanceof CanvasRenderingContext2D) { // For '2D' canvas. Only works with 2D for now.
            var image = originalGetImageData.call(ctx, 0, 0, this.width, this.height);

            var randomisedImage = randomiseImageData(image);

            ctx.putImageData(randomisedImage, 0, 0, 0, 0, this.width, this.height);
        }
        else if (ctx instanceof WebGLRenderingContext) {
            console.log("[INFO] WebGLRenderingContext spoofing not yet implemented");
        }
        else if (ctx instanceof WebGL2RenderingContext) {
            console.log("[INFO] WebGL2RenderingContext spoofing not yet implemented");
        }
        else if (ctx instanceof ImageBitmapRenderingContext) {
            console.log("[INFO] ImageBitmapRenderingContext spoofing not yet implemented");
        }

        originalToBlob.call(this, callback, mimeType, qualityArgument);
    };

    HTMLCanvasElement.prototype.mozGetAsFile = function(name, type) {
        console.log("[ALERT] " + window.location.hostname + " called HTMLCanvasElement.mozGetAsFile()");

        var ctx = HTMLCanvasElement.prototype.getContext.call(this, "2d") ||
            HTMLCanvasElement.prototype.getContext.call(this, "webgl") ||
            HTMLCanvasElement.prototype.getContext.call(this, "experimental-webgl") ||
            HTMLCanvasElement.prototype.getContext.call(this, "webgl2") ||
            HTMLCanvasElement.prototype.getContext.call(this, "experimental-webgl2");

        if (ctx instanceof CanvasRenderingContext2D) { // For '2D' canvas. Only works with 2D for now.
            var image = originalGetImageData.call(ctx, 0, 0, this.width, this.height);

            var randomisedImage = randomiseImageData(image);

            ctx.putImageData(randomisedImage, 0, 0, 0, 0, this.width, this.height);
        }
        else if (ctx instanceof WebGLRenderingContext) {
            console.log("[INFO] WebGLRenderingContext spoofing not yet implemented");
        }
        else if (ctx instanceof WebGL2RenderingContext) {
            console.log("[INFO] WebGL2RenderingContext spoofing not yet implemented");
        }
        else if (ctx instanceof ImageBitmapRenderingContext) {
            console.log("[INFO] ImageBitmapRenderingContext spoofing not yet implemented");
        }

        return originalMozGetAsFile.call(this, name, type);
    };
})();

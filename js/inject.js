function inject(filePath, callback) {
    var script = document.createElement('script');
    script.src = chrome.extension.getURL(filePath);
    script.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);
    
    callback();
}

inject("lib/seedrandom.min.js", function() {
    inject("js/random.js", function() {
        inject("js/api/document.js", function() {
            console.log("[INFO] Injected Document API ...");
        });
        inject("js/api/navigator.js", function() {
            console.log("[INFO] Injected Navigator API ...");
        });
        inject("js/api/canvas.js", function() {
            console.log("[INFO] Injected Canvas API ...")
        });
        inject("js/api/history.js", function() {
            console.log("[INFO] Injected History API ...")
        });
        inject("js/api/battery.js", function() {
            console.log("[INFO] Injected Battery API ...")
        });
    });
});
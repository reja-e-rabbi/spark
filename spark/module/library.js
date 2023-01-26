'use strect';
export { library };
class library {
    add() {
        var online = {
            "html2pdf": 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
            "pdfjs": '//mozilla.github.io/pdf.js/build/pdf.js',
            "sheareon": {
                "css": "https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css",
                "js": "https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.iife.js"
            },
            "compressor": "https://cdnjs.cloudflare.com/ajax/libs/compressorjs/1.1.1/compressor.min.js",
            "jsBarcode":"https://unpkg.com/jsbarcode@latest/dist/JsBarcode.all.min.js",
            "qrCode": "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"
        }
        return online;
    }
    addScript(url) {
        var script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = url;
        document.head.appendChild(script);
    }
    addCss(url) {
        var css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = url;
        document.head.appendChild(css);
    }
    addScriptBody(url) {
        var script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = url;
        document.body.appendChild(script);
    }
}
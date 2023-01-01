'use strect';
export { library };
class library {
    add() {
        var online = {
            "html2pdf": 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
            "pdfjs": '//mozilla.github.io/pdf.js/build/pdf.js'
        }
        return online;
    }
    addScript(url) {
        var script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = url;
        document.head.appendChild(script);
    }
    addScriptBody(url) {
        var script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = url;
        document.body.appendChild(script);
    }
}
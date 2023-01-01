'use strict';
export {pdf};
class pdf{
    rander(obj){
        var url = obj.pdf_url;
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
        var pdfDoc = null,
            pageNum = obj.start_page_num,
            pageRendering = false,
            pageNumPending = null,
            scale = obj.scale,
            canvas = document.querySelector(obj.css.canvas),
            ctx = canvas.getContext('2d');
        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector(obj.css.next).addEventListener('click', onNextPage);
            document.querySelector(obj.css.prev).addEventListener('click', onPrevPage);

            pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
                pdfDoc = pdfDoc_;
                document.querySelector(obj.css.page_count).textContent = pdfDoc.numPages;
                renderPage(pageNum);
            });
        });
        function renderPage(num) {
           pageRendering = true;
           // Using promise to fetch the page
           pdfDoc.getPage(num).then(function(page) {
             var viewport = page.getViewport({scale: scale});
             canvas.height = viewport.height;
             canvas.width = viewport.width;
             var renderContext = {
               canvasContext: ctx,
               viewport: viewport
             };
             var renderTask = page.render(renderContext);
             // Wait for rendering to finish
             renderTask.promise.then(function() {
               pageRendering = false;
               if (pageNumPending !== null) {
                 // New page rendering is pending
                 renderPage(pageNumPending);
                 pageNumPending = null;
               }
             });
           });
           // Update page counters
           document.querySelector(obj.css.page_num).textContent = num;
        }
         function queueRenderPage(num) {
           if (pageRendering) {
             pageNumPending = num;
           } else {
             renderPage(num);
           }
         }
         function onPrevPage() {
           if (pageNum <= 1) {
             return;
           }
           pageNum--;
           queueRenderPage(pageNum);
         }
         function onNextPage() {
           if (pageNum >= pdfDoc.numPages) {
             return;
           }
           pageNum++;
           queueRenderPage(pageNum);
         }
    }
}
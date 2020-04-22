/*
 * https://www.textcontrol.com/blog/2019/10/10/loading-and-saving-documents-using-angular/
*/

var htmlDocument = "<h1>Welcome to Text Control</h1>";

var textControl1;
	
window.onload = function() {
  textControl1 = new TXTextControlWeb("myTextControlContainer");
};

// this function loads a document as HTML
function tcLoadDocument() {
  textControl1.loadDocument(
    TXTextControl.StreamType.HTMLFormat,
    btoa(htmlDocument));
}

// this function saves the document as PDF
function tcSavePDF() {
  textControl1.saveDocument(TXTextControl.StreamType.AdobePDF, function(e) {
    // create temporary link to download document
    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/octet-stream;base64,' + e.data);
    element.setAttribute('download', "test.pdf");

    element.style.display = 'none';
    document.body.appendChild(element);

    // simulate click
    element.click();

    // remove the link
    document.body.removeChild(element);
  });
}
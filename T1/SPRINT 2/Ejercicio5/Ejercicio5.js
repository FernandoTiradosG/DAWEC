document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    // Aquí debería generar el XPath del elemento
    const xpath = generateXPath(clickedElement);
    // Aquí puedo mostrar el XPath en una alerta
    alert('El XPath del elemento clickeado es:\n' + xpath);
});

function generateXPath(element) {
    // Aquí se escribe el código para generar el XPath del elemento
    let xpath = '';
    for (; element && element.nodeType === 1; element = element.parentNode) {
        const id = element.id ? '[@id="' + element.id + '"]' : '';
        const className = element.className ? '[contains(@class,"' + element.className + '")]' : '';
        xpath = '/' + element.nodeName.toLowerCase() + id + className + xpath;
    }
    return xpath;
}

// Para interactuar con elementos dentro del iframe
window.addEventListener('load', function() {
    const iframe = document.getElementById('myIframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    
    iframeDocument.addEventListener('click', function(event) {
        const clickedElement = event.target;
        const xpath = generateXPath(clickedElement);
        alert('El XPath del elemento clickeado dentro del iframe es:\n' + xpath);
    });
});
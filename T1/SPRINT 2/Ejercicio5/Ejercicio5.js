document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(event) {
      const target = event.target;
      const xpath = getXPath(target);
      alert('XPath del elemento: ' + xpath);
  });

  const iframe = document.getElementById('myIframe');

  // Escucha los mensajes enviados desde el iframe
  window.addEventListener('message', function(event) {
      if (event.source === iframe.contentWindow) {
          const target = event.data.target;
          const xpath = event.data.xpath;
          alert('XPath del elemento dentro del iframe: id(""myIframe")/' + xpath);
      }
  });

  function getXPath(element) {
      if (element.id !== '')
          return 'id("' + element.id + '")';

      if (element === document.body)
          return element.tagName;

      const siblings = element.parentNode.childNodes;
      const count = 0;
      for (var i = 0; i < siblings.length; i++) {
          const sibling = siblings[i];
          if (sibling === element)
              return getXPath(element.parentNode) + '/' + element.tagName + '[' + (count + 1) + ']';
          if (sibling.nodeType === 1 && sibling.tagName === element.tagName)
              count++;
      }
  }
});
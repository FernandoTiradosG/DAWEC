document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(event) {
      var target = event.target;
      var xpath = getXPath(target);
      alert('XPath del elemento: ' + xpath);
  });

  var iframe = document.getElementById('myIframe');

  // Escucha los mensajes enviados desde el iframe
  window.addEventListener('message', function(event) {
      if (event.source === iframe.contentWindow) {
          var target = event.data.target;
          var xpath = event.data.xpath;
          alert('XPath del elemento dentro del iframe: id(""myIframe")/' + xpath);
      }
  });

  function getXPath(element) {
      if (element.id !== '')
          return 'id("' + element.id + '")';

      if (element === document.body)
          return element.tagName;

      var siblings = element.parentNode.childNodes;
      var count = 0;
      for (var i = 0; i < siblings.length; i++) {
          var sibling = siblings[i];
          if (sibling === element)
              return getXPath(element.parentNode) + '/' + element.tagName + '[' + (count + 1) + ']';
          if (sibling.nodeType === 1 && sibling.tagName === element.tagName)
              count++;
      }
  }
});
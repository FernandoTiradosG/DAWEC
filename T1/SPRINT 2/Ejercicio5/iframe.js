document.addEventListener('click', function(event) {
    const targetId = event.target.id;
    const xpath = getXPath(event.target);

    window.parent.postMessage({
        targetId: targetId,
        xpath: xpath
    }, '*');
});

function getXPath(element) {
    if (element.id !== '')
        return 'id("' + element.id + '")';

    if (element === document.body)
        return element.tagName;

    const siblings = element.parentNode.childNodes;
    const count = 0;
    for (let i = 0; i < siblings.length; i++) {
        const sibling = siblings[i];
        if (sibling === element)
            return getXPath(element.parentNode) + '/' + element.tagName + '[' + (count + 1) + ']';
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName)
            count++;
    }
}
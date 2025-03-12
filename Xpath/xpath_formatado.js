javascript:(function() {
    function getXPath(el) {
        if (!el || el.nodeType !== 1) return '';
        if (el.id) return '//*[@id="' + el.id + '"]';var parts = [];        
        while (el.parentNode) {
            var index = Array.from(el.parentNode.children).indexOf(el) + 1;
            parts.unshift(el.tagName.toLowerCase() + '[' + index + ']');
            el = el.parentNode;
        }
        return '/' + parts.join('/');
    }
    document.querySelectorAll('*').forEach(function(el) {
        el.onmouseover = function() {
            var oldTitle = el.getAttribute('data-old-title');
            if (!oldTitle) {
                el.setAttribute('data-old-title', el.title || '');
                el.title = getXPath(el) || 'XPath não encontrado';
            }
        };
        el.onmouseout = function() {
            el.title = el.getAttribute('data-old-title') || '';
        };
    });
})();
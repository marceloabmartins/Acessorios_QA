javascript:(function() {
    function getXPath(el) {
        if (!el || el.nodeType !== 1) return '';
        if (el.id) return '//*[@id="' + el.id + '"]';
        var parts = [];
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
                var xpath = `XPath: ${getXPath(el)}`;
                var id = el.id ? `ID: #${el.id}%60 : 'Sem ID';
                var name = el.name ? %60Name: ${el.name}%60 : 'Sem name';
                var classList = el.className ? %60Classes: .${el.className.split(' ').join('.')}%60 : 'Sem classes';
                el.title = %60${xpath} | ${id} | ${name} | ${classList}%60`;
                }
            };
            el.onmouseout = function() {
                el.title = el.getAttribute('data-old-title') || ''; 
            };
        });
    })();
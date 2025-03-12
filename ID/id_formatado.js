javascript:(function() {
    document.querySelectorAll('*').forEach(function(el) {
        el.onmouseover = function() {
            var oldTitle = el.getAttribute('data-old-title');
            if (!oldTitle) {
                el.setAttribute('data-old-title', el.title || '');
                el.title = el.id || 'Sem ID';
                };
            el.onmouseout = function() {
                el.title = el.getAttribute('data-old-title') || '';
                };
            });
    })();
javascript:(function() {
    document.querySelectorAll('*').forEach(function(el) {
        el.onmouseover = function() {
            var oldTitle = el.getAttribute('data-old-title');
            if (!oldTitle) {
                el.setAttribute('data-old-title', el.title || '');
                var name = el.name ? `Name: ${el.name}` : %27Sem name%27;
                el.title = name;
            }
        };
        el.onmouseout = function() {
            el.title = el.getAttribute(%27data-old-title%27) || %27%27;
        };
    });
})();
(function() {
    "use strict";

    //= ../app/app/dist/team-showcase.js

    document.addEventListener('appReady.EappsTeamShowcase', function() {
        var widgets = document.querySelectorAll('[data-elfsight-team-showcase-options]');

        Array.prototype.slice.call(widgets).forEach(function(widget) {
            var version = widget.getAttribute('data-elfsight-team-showcase-version');
            var options = widget.getAttribute('data-elfsight-team-showcase-options');
            var data = JSON.parse(decodeURIComponent(options));

            window.eappsTeamShowcase(widget, data);

            widget.removeAttribute('data-elfsight-team-showcase-options');
            widget.removeAttribute('data-elfsight-team-showcase-version');

            widget.data = {
                options: data,
                version: version
            };
        });
    });
})();

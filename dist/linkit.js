if (typeof jQuery === 'undefined') {
    console.log('Link it requires jQuery to run');
} else {
    (function ($) {
        "use strict";

        $.fn.linkIt = function (options) {
            var settings = $.extend({
                linkColor: "#ff0000",
                linkClass: '',
                link: {
                    word: '',
                    url: '#'
                },
                linkTitle: '',
                newWindow: false,
                caseSensitive: false
            }, options);

            var str = $(this);
            var newLink = $('<a></a>');

            str.each(function (index, element) {
                var strHtml = $(this).html(),
                    query = "\\b" + settings.link.word + "\\b",
                    flags = settings.caseSensitive === true ? 'g' : 'gi',
                    target = settings.newWindow === true ? '_blank"' : '_self',
                    linkClass = settings.linkClass !== '' ? settings.linkClass : '',
                    title = settings.linkTitle !== '' ? newLink.attr('title', settings.linkTitle) : '',
                    regex = new RegExp(query, flags);

                newLink.attr('href', settings.link.url);
                newLink.attr('target', target);
                newLink.css('color', settings.linkColor);
                newLink.addClass(linkClass);
                newLink.text(settings.link.word);
                newLink = newLink.get(0).outerHTML;

                var result = strHtml.replace(regex, newLink);
                return $(this).html(result);
            });
        };
    })(jQuery);
}

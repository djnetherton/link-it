if (typeof jQuery === 'undefined'){
    console.log('Link it requires jQuery to run');
}else{
    (function ($) {
        "use strict";
        $.fn.linkIt = function (options) {
            let settings = $.extend({
                linkColor: "#ff0000",
                linkClass: 'linkit-link',
                linkWord: ['', '#', ''],
                newWindow: false,
                caseSensitive: false
            }, options);
            
            let $str = $(this);
            
            $str.each(function (index, element) {
                let strHtml = $(this).html(),
                query = "\\b" + settings.linkWord[0] + "\\b",
                flags = settings.caseSensitive === true ? 'g' : 'gi',
                target = settings.newWindow === true ? ' target="_blank"' : '',
                regex = new RegExp(query, flags),
                newHtml = `<a href="${settings.linkWord[1]}" style="color:${settings.linkColor};" class="${settings.linkClass}" ${target}>${settings.linkWord[0]}</a>`,
                result = strHtml.replace(regex, newHtml);
                return $(this).html(result);
            });
        };
    }(jQuery));
}
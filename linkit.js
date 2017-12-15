if (typeof jQuery == 'undefined'){
    console.log('Link it requires jQuery to run');
}else{
    (function ($) {
    "use strict";
    $.fn.linkIt = function (options) {
        let settings = $.extend({
            linkColor: "#ff0000",
            linkClass: 'linkit-link',
            linkWord: ['', '#', ''],
            caseSensitive: false
        }, options);

        let $str = $(this);

        $str.each(function (index, element) {
            let strText = this.innerText,
                query = "\\b" + settings.linkWord[0] + "\\b",
                flags = settings.caseSensitive = true ? 'g' : 'gi',
                regex = new RegExp(query, flags),
                result = strText.replace(regex, "<a href=" + settings.linkWord[1]+ " style='color:" + settings.linkColor + "' class='" + settings.linkClass + "'>" + settings.linkWord[0] + "</a>");
                console.log(result);
            return this.innerHTML = result;  
        });
    };
}(jQuery));
}
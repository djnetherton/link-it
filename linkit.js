(function ( $ ) {
 
	$.fn.linkIt = function( action, options ) {

		// options
		var settings = $.extend({
            // These are the defaults.
            color: "#ff0000"
        }, options );

		if ( action === "url") {
		var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
		var regex = new RegExp(expression);
		var text = this.html();

			if (text.match(regex) )
			{
				text = text.replace(regex, "<a href='$&' style='color:" + settings.color + "'>$&</a>");
				this.html(text);
			}else {
				alert("No match");
			}


		}

		if ( action === "text") {
		var text = settings.text;
		var link = settings.link;
		console.log(text);
		var regex = new RegExp(text);
		var text = this.html();

			if (text.match(regex) )
			{
				text = text.replace(regex, "<a href='" + settings.link + "' style='color:" + settings.color + "'>$&</a>");
				this.html(text);
			}else {
				alert("No match");
			}


		}

	};
 
}( jQuery ));
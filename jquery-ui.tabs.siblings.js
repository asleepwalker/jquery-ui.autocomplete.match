/*
*	jQuery UI > Autocomplete Widget > Match, v1.0
*	(c) 2014 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/jquery-ui.autocomplete.match.js
*/

(function($) {

	var originalCreate = $.ui.tabs.prototype._create;

	function openSibling(goingForward) {
		var target = this.options.active + (goingForward ? 1 : -1);
		this._activate(this._findNextTab(target, goingForward));
	}

	$.extend($.ui.tabs.prototype, {
		siblings: {
			prev: false,
			next: false 
		},
		_create: function() {
			var widget = this,
				s;
			
			originalCreate.call(widget);

			if (s = widget.options.siblings) {
				if (s.prev && s.prev instanceof $) {
					s.prev.on('click', function() {
						openSibling.call(widget, false);
					});
				}
				if (s.next && s.next instanceof $) {
					s.next.on('click', function() {
						openSibling.call(widget, true);
					});
				}
			}
		}
	});

})(jQuery);
/*
*	jQueryUI.Autocomplete.Match, v1.0.2
*	(c) 2014–2017 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/jquery-ui.autocomplete.match.js
*/

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = function (root, jQuery) {
			if (jQuery === undefined) {
				if (typeof window !== 'undefined') {
					jQuery = require('jquery');
				} else {
					jQuery = require('jquery')(root);
				}
			}
			factory(jQuery);
			return jQuery;
		};
	} else {
		factory(jQuery);
	}
}(function ($) {

	$.extend($.ui.autocomplete.prototype, {
		highlight: false,
		_renderItem: function (ul, item) {
			var term = this.element.val();
			var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), 'gi');
			var label = item.label;
			var matchClass = typeof this.options.highlight == 'string' ?
				this.options.highlight
				: 'ui-autocomplete-match';

			return $('<li>')
				.data('item.autocomplete', item)
				.html(this.options.highlight ?
					label.replace(matcher, '<span class="' + matchClass + '">$&</span>')
					: label)
				.appendTo(ul);
		}
	});

}));

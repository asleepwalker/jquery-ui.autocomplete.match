/*
*	jQuery UI > Autocomplete Widget > Match, v1.0
*	(c) 2014 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/jquery-ui.autocomplete.match.js
*/

(function($) {

	$.extend($.ui.autocomplete.prototype, {
		highlight: false,
		_renderItem: function(ul, item) {
			var term = this.element.val(),
				matcher = new RegExp($.ui.autocomplete.escapeRegex(term), 'i');

			return $('<li>')
				.data('item.autocomplete', item)
				.[this.options.highlight ? 'html' : 'text'](item.label.replace(matcher, '<span>$&</span>'))
				.appendTo(ul);
		}
	});

})(jQuery);
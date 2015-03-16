/*
*	jQueryUI.Autocomplete.Match, v1.0.1
*	(c) 2014–2015 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/jquery-ui.autocomplete.match.js
*/

(function($) {

	$.extend($.ui.autocomplete.prototype, {
		highlight: false,
		_renderItem: function(ul, item) {
			var term = this.element.val(),
				matcher = new RegExp($.ui.autocomplete.escapeRegex(term), 'gi'),
				label = item.label,
				matchClass = typeof this.options.highlight == 'string' ? this.options.highlight : 'ui-autocomplete-match';

			return $('<li>')
				.data('item.autocomplete', item)
				.html(this.options.highlight ? label.replace(matcher, '<span class="' + matchClass + '">$&</span>') : label)
				.appendTo(ul);
		}
	});

})(jQuery);

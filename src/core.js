(function($) {
	window.$ = window.mui = $;
	$.fn.extend = $.extend; // mui默认不为fn添加extend方法，无法理解
	$.extend({
		map: function(elements, callback) {
			var value, values = [],
				i, key, len;
			if (typeof elements.length === 'number') { // 从zepto中来的，可能会有Object:{a:'b',length:1}的情况未处理
				for (i = 0, len = elements.length; i < len; i++) {
					value = callback(elements[i], i);
					if (value !== null) values.push(value);
				}
			} else {
				for (key in elements) {
					value = callback(elements[key], key);
					if (value !== null) values.push(value);
				}
			}
			return values.length > 0 ? [].concat.apply([], values) : values;
		},
		grep: function(elements, callback) {
			return [].filter.call(elements, callback);
		}
	});
	$.fn.extend({
		map: function(fn) {
			return $($.map(this, function(el, i) {
				return fn.call(el, i, el);
			}));
		},
		grep:function(fn){
			return [].filter.call(this,fn);
		},
		get: function(idx) {
			return typeof(idx) == "undefined" ? [].splice.call(this) : this[idx >= 0 ? idx : idx + this.length];
		},
		eq: function(idx) {
			return $(this.get(idx));
		},
		val: function(value) {
			if (!this.length) return;
			if (typeof(value) == "undefined") {
				return this.get(0).value;
			}
			this.each(function() {
				this.value = value;
			});
		},
		html: function(value) {
			if (!this.length) return;
			if (typeof(value) == "undefined") {
				return this[0].innerHTML;
			}
			this.each(function () {
				this.innerHTML = value;
			});
		},
		text: function(value) {
			if (!this.length) return;
			if (typeof(value) == "undefined") {
				return this[0].innerText;
			}
			this.each(function () {
				this.innerText = value;
			});
		}
	});
})(mui);
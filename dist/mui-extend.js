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
					if (value != null) values.push(value);
				}
			} else {
				for (key in elements) {
					value = callback(elements[key], key);
					if (value != null) values.push(value);
				}
			}
			return values.length > 0 ? [].concat.apply([], values) : values;
		},
		grep:function (elements, callback) {
			return [].filter.call(elements,callback);
		}
	});
	$.fn.extend({
		map: function(fn) {
			return $($.map(this, function(el, i) {
				return fn.call(el, i, el)
			}))
		},
		get: function(idx) {
			return typeof(idx) == "undefined" ? [].splice.call(this) : this[idx >= 0 ? idx : idx + this.length];
		},
		eq: function(idx) {
			return $(this.get(idx));
		}
	});
})(mui);

(function ($) {
	$.fn.extend({
	hasClass:function (cls) {
		if (typeof(cls)=="undefined") {
			return false;
		}
		return [].every.call(this, function (el,idx) {
			return el.nodeType === 1 && el.classList.contains(cls);
		})
	},
	addClass:function (cls) {
		this.each(function () {
			if (this.nodeType === 1) {
				this.classList.add(cls);
			}
			return true;
		})
	},
	removeClass:function (cls) {
		this.each(function () {
			if (this.nodeType === 1) {
				this.classList.remove(cls);
			}
			return true;
		})
	}
});
})(mui);


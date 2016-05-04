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
(function ($) {
	$.fn.extend({
		attr:function (name, value) {
			if (typeof(name)!=="string" || !this.length) {
				return;
			}
			// 获取属性值
			if (typeof(value)=="undefined") {
				var el = this.get(0);
				if (el.nodeType !== 1) {
					return;
				}
				return el.getAttribute(name);
			}
			// 设置属性值
			this.each(function () {
				return this.nodeType === 1&& this.setAttribute(name,value);
			});
		},
		removeAttr:function (name) {
			if (typeof(name)=="undefined") {
				return;
			}
			// 暂时不考虑移除多个属性
			this.each(function () {
				return this.nodeType === 1 && this.removeAttribute(name);
			});
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
		});
	},
	addClass:function (cls) {
		this.each(function () {
			return this.nodeType === 1 && this.classList.add(cls);
		});
	},
	removeClass:function (cls) {
		this.each(function () {
			return this.nodeType === 1 && this.classList.remove(cls);
		});
	}
});
})(mui);

(function ($) {
	$.fn.extend({
		css:function (name,value) {
			if (!this.length || typeof(name)=="undefined") {
				return;
			}
			var cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 };
			// 暂时只支持单个属性
			if (typeof(value)=="undefined") {	
				return this[0].style[name];
			}
			var maybePxValue = (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value;
			var css = name.toLowerCase()+":"+maybePxValue+";";
			this.each(function () {
				return this.style.cssText += ';' + css;
			});
		}
	});
})(mui);
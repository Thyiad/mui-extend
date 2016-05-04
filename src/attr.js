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
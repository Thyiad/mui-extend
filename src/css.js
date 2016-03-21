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
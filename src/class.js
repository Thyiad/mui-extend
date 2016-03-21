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

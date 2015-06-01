(function ($) {

	$.fn.incremental = function( options ) {

		var settings = $.extend({
			min: 1,
			max: 10,
			loop: true,
			afterThought: null
		}, options);

		var curInput = $(this);
		var inputClass = curInput.attr("class").split(' ')[0];
		curInput.parent().append("<div class='btn-holder'><div class='button"+inputClass+" increase'></div><div class='button"+inputClass+" decrease'></div></div>");
	
		
		$(".button"+inputClass).on("click", function() {
			var btn = $(this);

			var curVal = btn.parent().parent().find("input:text").val();
			
			curVal = Number(curVal);
			var newVal = curVal;
			console.log("CUR VAL : " + curVal);
			if(btn.hasClass("increase")) {
				if(curVal < settings.max) {
					newVal++;
				} else if(settings.loop) {
					newVal = settings.min;
				}
			} else if(btn.hasClass("decrease")) {
				if(curVal > settings.min) {
					newVal--;
				} else if(settings.loop) {
					newVal = settings.max;
				}
			}
			curInput.parent().parent().find("input:text").val(newVal);

			if(settings.afterThought != null)
				settings.afterThought();
		});

		return this;
	};

}( jQuery));
jQuery(function($) {
	$.incremental = function(min, max, loop, input, afterThought) {
		input.parent().append("<div class='btn increase'>+</div><div class='btn decrease'>-</div>");
	
		$(".btn").on("click", function() {
			var btn = $(this);

			var curVal = input.val();
			curVal = Number(curVal);
			var newVal = curVal;

			if(btn.hasClass("increase")) {
				if(curVal < max) {
					newVal++;
				} else if(loop) {
					newVal = min;
				}
			} else if(btn.hasClass("decrease")) {
				if(curVal > min) {
					newVal--;
				} else if(loop) {
					newVal = max;
				}
			}

			input.val(newVal);

			if(afterThought != null)
				afterThought();
		});
	}
});
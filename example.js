$(document).ready(function() {
    // in the parameters, afterthought can just not be set, it's supposed to be there to give a way to access the input value right after it was changed, so you can save it on the server or whatever else you kids to these days.
  
    $(".input").incremental({
		min: 1,
		max: 200,
		loop: true,
		afterThought: function() {
        alert("NEW VAL : " + $(".input").val());
	}
	});
    /*
    like I said, it can also be :
     $(".input").incremental({
		min: 1,
		max: 200,
		loop: true
	});
    */
});


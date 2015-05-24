$(document).ready(function() {
    // note the last param, can just be null, it's supposed to be something to happen after the change, since it happens after, if you want to use the new value of the input to for example, send it to a server, you can access it via js or jquery in the function here, since the value is already changed when it runs
    
   $.incremental(0,100,true,$(".input"),function() {
        alert("NEW VAL : " + $(".input").val());
	}); 
    

// like I said, it can also be :
/*
    $.incremental(0,900,false,$(".input"), null); 
*/
 
});
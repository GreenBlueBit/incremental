# incremental
incremental gives the ability to easily add a + and - button with a few quick features I found myself always needing to implement manually on most of my web projects.

With incremental, you can target any input and add buttons to it to add and subtract the values in the field.
I always found this feature lacking since it makes ui way friendlier to users, who don't have to always click the field, remove the value
and add the new one.

All you have to do is have an input field in your html, like this for example : 

    <input type="text" name="test_input" class="input">
    
And then do the following in a local js file.

        /* $(".input").incremental({
    		min: 1,
    		max: 200,
    		loop: true,
    		afterThought: function() {
            alert("NEW VAL : " + $(".input").val());
    	}
    	});
    	*/
    
    $(".input").incremental({
		min: 1,
		max: 200,
		loop: true
	});
    
The parameters are as follows :

    min - the minimum value allowed in the field
    max - the maximum value allowed in the field
    loop - boolean which, if true, forces the value to loop if it goes beyond the set limitations.
    afterThought - allows you to have a method run after the value was modified, so you can for example send the new information to your server.

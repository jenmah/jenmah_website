$(document).ready(function() {  

	$("#first-nav").hover(function() {
		console.log('hello');
	  $(this).find("h4").css({"color":"red"});
	      });

});
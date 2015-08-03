$(document).ready(function() {  

	// $("#first-nav").hover(function() {
	// 	console.log('hello');
	//   $(this).find("h4").css({"color":"red"});
	//       });

$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.parallax-one').css('background-position', 'left ' + ((scrolledY)) + 'px');
});

});
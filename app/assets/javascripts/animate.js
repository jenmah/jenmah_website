$(function(){

var scrollToSection = function(button, location){
  $(button).click( function(){
    $('html, body').animate({
        scrollTop: location,
    }, 1000);
  });
}

var initialize = function(){
  scrollToSection('.test-button', 775);
  };

$(initialize) 

});

$(document).ready(function(){

$("#test-button").click(function() {
    console.log('testing');
    $('html,body').animate({
        scrollTop: $("#resume-div").offset().top},
        'slow');
});

});

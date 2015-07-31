$(document).ready(function(){
    $(".pdf-download one-quarter inline-block pulse").each(function() {
        animationHover(this, 'pulse');
    });
});


function animationHover(element, animation){
    element = $(".fa-file-pdf-o fa-2x");
    element.hover(
        function() {
            element.addClass('animated ' + pulse);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + pulse);
            }, 2000);         
        });
}

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 290) {
            $('head-nav').addClass('stickytop');
        }
        else {
            $('head-nav').removeClass('stickytop');
        }
    });
});
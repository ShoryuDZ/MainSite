$(document).ready(function($) {
    $('a[href^="#"]').bind('click.scroll', function(e) {
        e.preventDefault();
        
        // Get the current target hash
        var target = this.hash;
        
        // Animate the scroll bar action so its smooth instead of a hard jump
        $('html, body').stop().animate({
            'scrollTop' : $(target).offset().top
        }, 4000, 'swing', function() {
            window.location.hash = target;
        });
    });
    
    var button = $('#backToTopButton');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            button.addClass('show');
        } 
        else {
            button.removeClass('show');
        }
    });

    button.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 2500);
    });
});

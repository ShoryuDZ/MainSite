$(document).ready(function($) {
        
    document.querySelectorAll('a[id^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            var hash = $(this).attr('id');
            var scrollSpeed = 2000;

            if (location.pathname.endsWith("education.html")) {
                scrollSpeed = 4000;
            }
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, scrollSpeed);
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

$(document).ready(function($) {
    
    $('body:not(#loadingScreen)').css('display', 'black');

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
    
    $('a:not(.icon)').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        if (newLocation.length && !newLocation.endsWith(location.pathname)) {
            $('body').fadeOut(1000, newpage);
        }
    });
  
    function newpage() {
        window.location = newLocation;
    }
});

$(window).on('load', function() {
    $('#loadingScreen').fadeOut(1500);
    $('body:not(#loadingScreen)').fadeIn(2500);
});

function openMenu() {
    var menu = document.getElementById("responsiveMenu");
    var logo = document.getElementById("responsiveLogo");
    if (menu.className === "menu") {
        menu.className += " responsive";
        logo.className += " responsive";
    }
    else {
        menu.className = "menu";
        logo.className = "logo";
    }
    
    $('html, body').animate({scrollTop:0}, 2500);
}

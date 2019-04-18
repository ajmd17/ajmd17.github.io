$(document).ready(function () {
    /*$('#about-link').click(function () {
        $('html, body').animate({
            scrollTop: $('#about').offset().top - $('#top-bar-wrapper').height()
        }, 500);
    });

    $('#projects-link').click(function () {
        $('html, body').animate({
            scrollTop: $('#projects').offset().top - $('#top-bar-wrapper').height()
        }, 500);
    });

    $('#contact-link').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top - $('#top-bar-wrapper').height()
        }, 500);
    });*/

    function isNightTime() {
        var hours = new Date().getHours();
        return !(hours > 6 && hours < 20);
    }

    var $nightModeBtn = $('#night-mode-btn');

    if (isNightTime()) {
        $nightModeBtn.html('<i class="fas fa-sun" ></i> Day Mode');
        jQuery('body').addClass('dark');
    } else {
        $nightModeBtn.html('<i class="fas fa-moon" ></i> Night Mode');
        jQuery('body').removeClass('dark');
    }

    $nightModeBtn.click(function () {
        if (jQuery('body').hasClass('dark')) {
            $nightModeBtn.html('<i class="fas fa-moon" ></i> Night Mode');
            jQuery('body').removeClass('dark');
        } else {
            $nightModeBtn.html('<i class="fas fa-sun" ></i> Day Mode');
            jQuery('body').addClass('dark');
        }
    });


    $('#send-email-link').click(function () {
        var addr = 'hello@andrewjmacdonald.ca';
        $('#email-address-val').html('<a href="mailto:' + addr  + '">' + addr + '</a>');
        $('#email-address-box').show();
    });

    $('#close-email-box').click(function () {
        $('#email-address-box').hide();
    });
});

$(document).scroll(function () {

    // if ($(this).scrollTop() > 10) {
    //     $('#top-bar').addClass('shrinked');
    // } else {
    //     $('#top-bar').removeClass('shrinked');
    // }
});

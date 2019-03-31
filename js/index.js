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


    $('#send-email-link').click(function () {
        $('#email-address-val').html('hello@andrewjmacdonald.ca');
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
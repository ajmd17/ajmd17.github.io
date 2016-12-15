$(document).ready(function() {
    $('#about-link').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top - $('#top-bar-wrapper').height()
        }, 500);
    });
    $('#projects-link').click(function() {
        $('html, body').animate({
            scrollTop: $('#projects').offset().top - $('#top-bar-wrapper').height()
        }, 500);
    });
});

$(document).scroll(function() {
    if ($(this).scrollTop() > 10) {
        $('#top-bar').addClass('shrinked');
    } else {
        $('#top-bar').removeClass('shrinked');
    }
});
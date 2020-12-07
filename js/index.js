function buildPortfolioItem(item) {
    const $card = $('<div class="project-circle"></div>')

    if (item.wip || item.small) {
        $card.addClass('small')
    }

    const $header = $('<div class="project-header"></div>')

    $header.append(`<div class="project-title"><h3>${item.title}${item.wip ? ' (WIP)' : ''}</h3></div>`)
    $header.append(`<span class="description">${item.description}</span>`)

    $card.append($header)

    if ('links' in item) {
        const $links = $(`<div class="links"></div>`)

        for (let link of item.links) {
            $links.append(`<a href="${link.href}" target="_blank">${link.name}</a>`)
        }

        $card.append($links)
    }

    return $card
}

function buildPortfolioItems() {
    const projectKeysSorted = Object.keys(PORTFOLIO_DATA.projects).sort((a, b) => Number(b) - Number(a))

    const $container = $('#portfolio-container')

    $container.html('')

    projectKeysSorted.forEach((key) => {
        const $yearContainer = $('<div class="year-container"></div>')

        $yearContainer.append(`<h3>${key}</h3>`)

        PORTFOLIO_DATA.projects[key].forEach((item) => {
            $yearContainer.append(buildPortfolioItem(item))
        })

        $container.append($yearContainer)
    })
}

$(document).ready(function () {
    buildPortfolioItems()

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

    // if (isNightTime()) {
    //     $nightModeBtn.html('<i class="fas fa-sun" ></i>');
    //     jQuery('body').addClass('dark');
    // } else {
    //     $nightModeBtn.html('<i class="fas fa-moon" ></i>');
    //     jQuery('body').removeClass('dark');
    // }

    // $nightModeBtn.click(function () {
    //     if (jQuery('body').hasClass('dark')) {
    //         $nightModeBtn.html('<i class="fas fa-moon" ></i>');
    //         jQuery('body').removeClass('dark');
    //     } else {
    //         $nightModeBtn.html('<i class="fas fa-sun" ></i>');
    //         jQuery('body').addClass('dark');
    //     }
    // });


    $('#send-email-link').click(function (e) {
        console.log(e)
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

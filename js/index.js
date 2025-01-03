

const BY_YEAR = false;
const EMAIL_ADDRESSES = [
    'm' + 'a' + 'i' + 'l' + '@' + 'a' + 'j' + 'm' + 'd' + '.dev',
    'a' + 'n' + 'd' + 'r' + 'e' + 'w' + 'm' + 'a' + 'c' + 'd' + 'o' + 'n' + 'a' + 'l' + 'd' + '9' + '7' + '1' + '@' + 'g' + 'm' + 'a' + 'i' + 'l' + '.c' + 'o' + 'm'
];

function memoize(method) {
    const keyArray = [],
          resultsArray = []

    const findMemoizedArgsIndex = (args) => {
        for (let i = 0; i < keyArray.length; i++) {
            let keys = keyArray[i],
                matches = true


            if (keys.length != args.length) {
                continue
            }

            for (let j = 0; j < keys.length; j++) {
                if (keys[j] !== args[j]) {
                    matches = false
                    break
                }
            }

            if (matches) {
                return i
            }
        }

        return -1
    }

    return function (...args) {
        const index = findMemoizedArgsIndex(args)

        if (index === -1) {
            keyArray.push(args)

            const result = method(...args)

            resultsArray.push(result)

            return result
        }

        return resultsArray[index]
    }
}

const previewModalInstance = new class PreviewModal {
    constructor() {
        this._element = null
        this._backdrop = null
        this._content = null
    }

    bindEvents() {
        this.content.click((e) => {
            e.stopPropagation()
        })
        
        this.backdrop.click((e) => {
            this.hide()
        })

        this.closeButton.click((e) => {
            if (e) {
                e.preventDefault()
            }

            this.hide()
        })
    }

    hide() {
        this.element.hide()

        this._enableScroll()
    }

    /**
     * 
     * @param {*} item 
     * @param {string} href 
     * @param {'img' | 'video'} type 
     * @param {object} [options]
     */
    show(item, href, type = 'img', options = undefined) {
        this.hide();

        this.element.attr('data-mode', type);
        this.element.find('.description').html((options && options.description) ? options.description : '');

        if (type === 'img') {
            const $previewImg = this.element.find('.preview-img')
            $previewImg[0].src = `img/preview/${href}` 
        } else if (type === 'video') {
            const $previewVideo = this.element.find('.preview-video')
            $previewVideo[0].src = `img/preview/${href}` 
        }
    
        this.element.show()

        this._disableScroll()
    }

    _enableScroll() {
        document.body.style.overflow = 'scroll'
    }

    _disableScroll() {
        document.body.style.overflow = 'hidden'
    }

    get closeButton() {
        return this._closeButton || (this._closeButton = this.element.find('.modal-close'))
    }

    get content() {
        return this._content || (this._content = this.element.find('.modal-content'))
    }

    get backdrop() {
        return this._backdrop || (this._backdrop = this.element.find('.modal-backdrop'))
    }

    get element() {
        return this._element || (this._element = $('#preview-modal'))
    }
}

/** @param {string} text */
function renderLinksAsHtml(text) {
    const patterns = [
        [/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>'],
        [/(^|[^\/])(www\.[\S]+(\b|$))/gim,'$1<a href="http://$2" target="_blank">$2</a>']
    ]

    return patterns.reduce((previousValue, currentValue) => {
        return previousValue.replace(currentValue[0], currentValue[1])
    }, text)
}

function buildPreviews(item) {
    if (item.img || item.videos) {
        const $previews = $('<div class="previews"></div>');

        if (item.videos) {
            for (let element of item.videos) {
                const href = typeof element === 'string' ? element : element.href;
                const description = typeof element === 'string' ? '' : element.description;

                $previews.append($('<div class="preview"></div>')
                    .append($(`<video muted autoplay loop src="img/preview/${href}"></video>`))
                    .click(function () {
                        previewModalInstance.show(item, href, 'video', {
                            description
                        });
                    }))
            }
        }

        if (item.img) {
            for (let element of item.img) {
                const href = typeof element === 'string' ? element : element.href;
                const description = typeof element === 'string' ? '' : element.description;

                $previews.append($('<div class="preview"></div>')
                    .append($(`<img src="img/preview/${href}">`))
                    .click(function () {
                        previewModalInstance.show(item, href, 'img', {
                            description
                        });
                    }))
            }
        }

        return $previews;
    }

    return null;
}

function buildPortfolioItem(item) {
    const $card = $('<div class="project-circle"></div>')

    if (item.featured) {
        $card.addClass('featured');
    }

    if (item.wip || item.small) {
        $card.addClass('small')
    }

    const $header = $('<div class="project-header"></div>')

    let itemTitle = item.title

    // if ('links' in item) {
    //     let mainLink = item.links.find((link) => link.main)

    //     if (mainLink) {
    //         itemTitle = `<a href="${mainLink.href}" target="_blank">${item.title}</a>`
    //     }
    // }

    const $projectTitle = $('<div class="project-title">');

    if (item.links && item.links[0]) {
        $projectTitle.append(`<h3><a href="${item.links[0].href}" target="_blank">${itemTitle}${item.wip ? ' (WIP)' : ''}</a></h3>`)
    } else {
        $projectTitle.append(`<h3>${itemTitle}${item.wip ? ' (WIP)' : ''}</h3>`)
    }

    if ('tags' in item && item.tags.length) {
        const $tags = $('<div class="tags">')

        item.tags.forEach((tag) => {
            $tags.append(`<div class="tag">${tag}</div>`)
        })

        $projectTitle.append($tags)
    }

    $header.append($projectTitle)
    $header.append(`<p class="description">${renderLinksAsHtml(item.description)}</p>`)

    $card.append($header)

    const $previews = buildPreviews(item);

    if ($previews !== null) {
        $card.append($previews);
    }

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
    const $container = $('#portfolio-container')
    $container.html('')

    if (BY_YEAR) {
        const projectKeysSorted = Object.keys(PORTFOLIO_DATA.projects).sort((a, b) => Number(b) - Number(a))

        projectKeysSorted.forEach((key) => {
            const $yearContainer = $('<div class="year-container"></div>')

            $yearContainer.append(`<h3>${key}</h3>`)

            PORTFOLIO_DATA.projects[key].forEach((item) => {
                $yearContainer.append(buildPortfolioItem(item))
            })

            $container.append($yearContainer)
        })
    } else {
        PORTFOLIO_DATA.projects.forEach((item) => {
            $container.append(buildPortfolioItem(item))
        })
    }
}

function buildEmploymentItems() {
    const $container = $('.employment-container');
    let $ul = $container.find('ul');

    if (!$ul.length) {
        $ul = $('<ul class="occupations"></ul>');
        $container.append($ul);
    }

    $ul.html('');

    PORTFOLIO_DATA.jobs.forEach((item) => {
        const $li = $('<li></li>');

        $li.append(`
            <div class="project-title">
                <h3>${item.name}</h3>
                <div class="title-start-end">
                    <p class="text">${item.title}</p>
                    <p class="text">${item.startDate} / ${item.endDate}</p>
                </div>
            </div>
            ${item.description ? `<div class="description">${item.description.split('\n').map(str => `<div class="line">${str.replaceAll('*', '&bull;')}</div>`).join('')}</div>` : ''}
            ${item.links ? `<div class="links">${item.links.map((link) => `<a href="${link.href}" target="_blank">${link.name}&nbsp;&nbsp;<i class="fas fa-external-link-square-alt"></i></a>`).join('')}</div>` : ''}
        `);

        const $previews = buildPreviews(item);

        if ($previews !== null) {
            $li.append($previews);
        }

        $ul.append($li);
    });
}

function buildSkills() {
    const $container = $('.skills-container');
    let $ul = $container.find('ul');

    if (!$ul.length) {
        $ul = $('<ul class="skills"></ul>');
        $container.append($ul);
    }

    $ul.html('');

    PORTFOLIO_DATA.skills.forEach((skill) => {
        const $skill = $(`<li>${skill}</li>`);

        $ul.append($skill);
    });
}

function addEscKeyListener() {
    $(document).keyup(function (e) {
        if (e.key === 'Escape') {
            previewModalInstance.hide()
        }
    })
}

$(document).ready(function () {
    addEscKeyListener();

    buildPortfolioItems();
    buildEmploymentItems();
    buildSkills();

    setTimeout(() => {
        const $contactMeButton = $('#contact-me-button');

        if ($contactMeButton.length) {
            $contactMeButton.attr('href', `mailto:${EMAIL_ADDRESSES[0]}`);
        }
    }, 10);

    previewModalInstance.bindEvents()

    var $nightModeBtn = $('#night-mode-btn');


    function isDarkModeEnabled() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    if (isDarkModeEnabled()) {
        jQuery('body').addClass('dark');
        $nightModeBtn.html('<i class="fas fa-sun" ></i>');
    } else {
        jQuery('body').removeClass('dark');
        $nightModeBtn.html('<i class="fas fa-moon" ></i>');
    }

    $nightModeBtn.click(function () {
        if (jQuery('body').hasClass('dark')) {
            $nightModeBtn.html('<i class="fas fa-moon" ></i>');
            jQuery('body').removeClass('dark');
        } else {
            $nightModeBtn.html('<i class="fas fa-sun" ></i>');
            jQuery('body').addClass('dark');
        }
    });


    $('#send-email-link').click(function (e) {
        $('#email-address-val').html(EMAIL_ADDRESSES.reduce((previousValue, currentValue, index) => {
            return previousValue + `<a href="mailto:${currentValue}" target="_blank">${currentValue}</a><br>` + (index < EMAIL_ADDRESSES.length - 1 ? '&nbsp;or&nbsp;' : '')
        }, ''));
        $('#email-address-box').show();
    });

    $('#close-email-box').click(function () {
        $('#email-address-box').hide();
    });
});

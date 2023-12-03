

const BY_YEAR = false

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
            this.hide()
        })
    }

    hide() {
        this.element.hide()

        this._enableScroll()
    }

    show(item, imgHref) {
        this.hide()

        const $previewImg = this.element.find('.preview-img')
    
        $previewImg[0].src = `img/preview/${imgHref}` 
    
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

function buildPortfolioItem(item) {
    const $card = $('<div class="project-circle"></div>')

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

    const $projectTitle = $('<div class="project-title">')
    $projectTitle.append(`<h3>${itemTitle}${item.wip ? ' (WIP)' : ''}</h3>`)

    if ('tags' in item && item.tags.length) {
        const $tags = $('<div class="tags">')

        item.tags.forEach((tag) => {
            $tags.append(`<div class="tag">${tag}</div>`)
        })

        $projectTitle.append($tags)
    }

    $header.append($projectTitle)
    $header.append(`<span class="description">${renderLinksAsHtml(item.description)}</span>`)

    $card.append($header)

    if ('img' in item) {
        const $previews = $('<div class="previews"></div>')

        for (let imgHref of item.img) {
            $previews.append($('<div class="preview"></div>')
                .append($(`<img src="img/preview/${imgHref}">`))
                .click(function () {
                    previewModalInstance.show(item, imgHref)
                }))
        }

        $card.append($previews)
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

function addEscKeyListener() {
    $(document).keyup(function (e) {
        if (e.key === 'Escape') {
            previewModalInstance.hide()
        }
    })
}

$(document).ready(function () {
    addEscKeyListener()
    buildPortfolioItems()

    previewModalInstance.bindEvents()


    function isNightTime() {
        var hours = new Date().getHours();
        return !(hours > 6 && hours < 20);
    }

    var $nightModeBtn = $('#night-mode-btn');


    $('#send-email-link').click(function (e) {
        console.log(e)
        var addr = 'm' + 'a' + 'i' + 'l' + '@' + 'a' + 'j' + 'm' + 'd' + '.ca';
        $('#email-address-val').html('<a href="mailto:' + addr  + '">' + addr + '</a>');
        $('#email-address-box').show();
    });

    $('#close-email-box').click(function () {
        $('#email-address-box').hide();
    });
});

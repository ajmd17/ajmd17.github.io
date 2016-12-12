$(document).ready(function() { 
    var $cards = $('.card');

    $.fn.visible = function(partial) {
        var $window = $(window);
        var $this = $(this);

        var viewTop = $window.scrollTop();
        var viewBottom = viewTop + $window.height();
        var top = $this.offset().top;
        var bottom = top + $this.height();

        var compareTop;
        var compareBottom;
        if (partial === true) {
            compareTop = bottom;
            compareBottom = top;
        } else {
            compareTop = top;
            compareBottom = bottom;
        }

        return (compareBottom <= viewBottom) && (compareTop >= viewTop);
    };

    function addAnimationClasses() {
        $cards.each(function(i, el) {
            var $card = $(el);
            if ($card.visible(true)) {
                $card.addClass('come-in');
            }
        });
    }

    function adjustCardHeights() {
        $cards.each(function(i, el) {
            // set each height to be the same as the width
            $(el).css('height', $(el).css('width'));
        });

        addAnimationClasses();
    }

    adjustCardHeights();

    // adjust the card heights when resized
    $(window)
        .resize(adjustCardHeights)
        .scroll(function(event) {
            addAnimationClasses();
        });
});
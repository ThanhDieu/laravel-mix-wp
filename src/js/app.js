
$(document).ready(function () {
    $('.banner-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    /**
     *
     * menu fixed
     */
    if ($(window).width() > 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("#menu-main").addClass('fixed-top');
                $(".cart-item .icon").addClass('fixed-ic');
            } else {
                $("#menu-main").removeClass('fixed-top');
                $(".cart-item .icon").removeClass('fixed-ic');
            }
        });
    }
    highestBoxmd();
    /**
     * menu mobile
     */
    if ($(window).width() < 992) {
        $('.menu-item-has-children').click(function () {
            var th = $(this);
            th.children('ul').slideToggle()
        })
        $('.btn-open').click(function () {
            $('#showRightPush').toggleClass('active');
            $('.menu-active').toggleClass('show-menu-mb');
        });
    }
    document.addEventListener("click", function (event) {
        if (event.target.closest("#menu-main")) return;
        $('#showRightPush').removeClass('active');
        $('.menu-active').removeClass('show-menu-mb');
    });
    /**
     * back to top
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll-up").fadeIn();
        } else {
            $(".scroll-up").fadeOut();
        }
    });
    $('#backToTop').on('click', function () {
        $("body,html").animate({scrollTop: 0}, "slow");
    });
    /**
     * Danh mục sản phẩm
     */

    $('.product-categories > .cat-parent').on('click', function () {
        let a = $(this);
        if (a.hasClass('active')) {
            a.removeClass('active');
            a.children('.children').slideUp('slow')
        } else {
            $('.sidebar-product .cat-parent').removeClass('active');
            $('.product-categories > .cat-parent > .children').slideUp('slow');
            a.addClass('active');
            a.children('.children').slideDown('slow')
        }
    })
});

function highestBoxmd() {
    $(window).on('load resize', function () {
        $(".owl-stage").each(function () {
            var wwindow = $(window).width();
            var highestBox = 0;
            $(this).find(".height-cover").each(function () {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            });
            $(this).find(".height-cover").height(highestBox);
        })
    });
};
/**
 * Custom btn quantity wc
 */

jQuery(function ($) {

    if (!String.prototype.getDecimals) {
        String.prototype.getDecimals = function () {
            var num = this,
                match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            if (!match) {
                return 0;
            }
            return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
        }
    }

    $(document).on('click', '.plus, .minus', function (e) {
        e.preventDefault();
        // Get values
        var $qty = $(this).closest('.quantity').find('.qty'),
            currentVal = parseFloat($qty.val()),
            max = parseFloat($qty.attr('max')),
            min = parseFloat($qty.attr('min')),
            step = $qty.attr('step');

        // Format values
        if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
        if (max === '' || max === 'NaN') max = '';
        if (min === '' || min === 'NaN') min = 0;
        if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;

        // Change the value
        if ($(this).is('.plus')) {
            if (max && (currentVal >= max)) {
                $qty.val(max);
            } else {
                $qty.val((currentVal + parseFloat(step)).toFixed(step.getDecimals()));
            }
        } else {
            if (min && (currentVal <= min)) {
                $qty.val(min);
            } else if (currentVal > 0) {
                $qty.val((currentVal - parseFloat(step)).toFixed(step.getDecimals()));
            }
        }

        // Trigger change event
        $qty.trigger('change');
    });
    wcqi_refresh_quantity_increments();

});

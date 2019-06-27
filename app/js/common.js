$(function () {

    $('.product__button').click(function (e) {
        e.preventDefault();

        var windowTop = $(window).scrollTop();

        $('body').attr('data-top', windowTop);
        $('.popup').hide();
        $('.popup__firststep').show();
        $('.popups__overlay').fadeIn('500');
        $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});

        $('body').scrollTop(windowTop);

    });

    $('.popup__submit').click(function (e) {
        e.preventDefault();

        $('.popup').hide();
        $('.popup__secondstep').show();
        $('.popups__overlay').fadeIn('500');
        $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});
    });

    $('.popups__overlay, .popup__close').click(function (e) {
        e.preventDefault();

        var windowTop = $('body').attr('data-top');

        $('.popups__overlay').fadeOut('500');
        $('.popup').fadeOut('500');
        $('html, body').css({'overflow' : 'visible', 'position' : 'relative'});

        $(window).scrollTop(windowTop);

    });


    $('.presents').click(function (e) {
        e.preventDefault();

        var windowTop = $(window).scrollTop();

        $('body').attr('data-top', windowTop);
        $('.popup').hide();
        $('.popup__present').show();
        $('.popups__overlay').fadeIn('500');
        $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});

        $('body').scrollTop(windowTop);
    });

    $('.presents').click(function (e) {
        e.preventDefault();

        var
            $this = $(this),
            thisItem = $this.closest('li'),
            thisPaste = thisItem.find('.present__hidden').html();

        $('.popup__content-presents').html(thisPaste);
        $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});
    });


    /////////////////////////////////////////////
    $('.hamburger__button').click(function (e) {
        e.preventDefault();

        var windowTop = $(window).scrollTop();

        $('body').attr('data-top', windowTop);
        $('.header__nav__container').addClass('openedNav');
        $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});

        $('body').scrollTop(windowTop);
    });

    $('.vav__close, .nav__overlay').click(function (e) {
        e.preventDefault();

        var windowTop = $('body').attr('data-top');

        $('.header__nav__container').removeClass('openedNav');
        $('html, body').css({'overflow' : 'visible', 'position' : 'relative'});

        $(window).scrollTop(windowTop);

    });



    /////////////////////////////////////////////
    $('.open__filters ').click(function (e) {
        e.preventDefault();

        var windowTop = $(window).scrollTop();

        $('body').attr('data-top', windowTop);
        $('.filter__container').addClass('openedFilter');
        $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});

        $('body').scrollTop(windowTop);
    });

    $('.filter__close, .filter__overlay').click(function (e) {
        e.preventDefault();

        var windowTop = $('body').attr('data-top');

        $('.filter__container').removeClass('openedFilter');
        $('html, body').css({'overflow' : 'visible', 'position' : 'relative'});

        $(window).scrollTop(windowTop);

    });


    //Маска телефона
    $("input[name=instalink]").mask("@AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
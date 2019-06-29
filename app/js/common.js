$(function () {

    $('.product__button').click(function (e) {
        e.preventDefault();

        var windowTop = $(window).scrollTop();

        setTimeout(function () {
            $('body').attr('data-top', windowTop);
            $('.popup__container').hide();
            $('.popup__firststep').show();
            $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});
            $('body').css({'padding-right' : $.scrollbarWidth()});

            var windowTopData = $('body').attr('data-top');

            $('body').scrollTop(windowTopData);
        }, 50);

    });

    $('.popup__submit').click(function (e) {
        e.preventDefault();

        $('.popup__container').hide();
        $('.popup__secondstep').show();
        $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});
    });

    $('.popups__overlay, .popup__close').click(function (e) {
        e.preventDefault();

        var windowTop = $('body').attr('data-top');

        $('.popup__container').hide();
        $('html, body').css({'overflow' : 'visible', 'position' : 'relative'});
        $('body').css({'padding-right' : '0'});

        $(window).scrollTop(windowTop);

    });


    $('.presents').click(function (e) {
        e.preventDefault();

        var windowTop = $(window).scrollTop();

        setTimeout(function () {
            $('.popup__container').hide();
            $('.popup__present').show();
            $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});
            $('body').css({'padding-right' : $.scrollbarWidth()});

            var windowTopData = $('body').attr('data-top');

            $('body').scrollTop(windowTopData);
        }, 50);
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

        setTimeout(function () {
            $('body').attr('data-top', windowTop);
            $('.header__nav__container').addClass('openedNav');
            $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});

            var windowTopData = $('body').attr('data-top');

            $('body').scrollTop(windowTopData);
        }, 50);
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

        setTimeout(function () {
            $('body').attr('data-top', windowTop);
            $('.filter__container').addClass('openedFilter');
            $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});

            var windowTopData = $('body').attr('data-top');

            $('body').scrollTop(windowTopData);
        }, 50);
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


    $(function(){ console.log($.scrollbarWidth()); });


    const targetElement = document.getElementById("popup"); //only popup can scroll

//put this when popup opens, to stop body scrolling
    bodyScrollLock.disableBodyScroll(targetElement);

//put this when close popup and show scrollbar in body
    bodyScrollLock.enableBodyScroll(targetElement);

});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}


$.scrollbarWidth = function() {
    var parent, child, width;

    if(width===undefined) {
        parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
        child=parent.children();
        width=child.innerWidth()-child.height(99).innerWidth();
        parent.remove();
    }

    return width;
};




$(function () {
    var
        w = $(window).width();

    $('.popup__container').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });


    // $('.product__button').click(function (e) {
    //     e.preventDefault();
    //
    //     var windowTop = $(window).scrollTop();
    //
    //     setTimeout(function () {
    //         $('body').attr('data-top', windowTop);
    //         $('.popup__container').hide();
    //         $('.popup__firststep').show();
    //         $('body').css({'padding-right' : $.scrollbarWidth()});
    //
    //         var windowTopData = $('body').attr('data-top');
    //
    //         if(w > 680) {
    //             $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});
    //             $('body').scrollTop(windowTopData);
    //         }
    //     }, 50);
    //
    // });


    $('.product__button').click(function (e) {
        e.preventDefault();

        setTimeout(function () {
            $('.popup__container').hide();
            $('.popup__firststep').show();
        }, 50);

    });

    $('.popup__submit').click(function (e) {
        e.preventDefault();

        $('.popup__container').hide();
        $('.popup__secondstep').show();
    });

    $('.popups__overlay, .popup__close').click(function (e) {
        e.preventDefault();

        $('.popup__container').hide();

    });


    $('.presents').click(function (e) {
        e.preventDefault();


        setTimeout(function () {
            $('.popup__container').hide();
            $('.popup__present').show();
        }, 50);
    });

    $('.presents').click(function (e) {
        e.preventDefault();

        var
            $this = $(this),
            thisItem = $this.closest('li'),
            thisPaste = thisItem.find('.present__hidden').html();

        $('.popup__content-presents').html(thisPaste);
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

    scrollCheck();
    scrolling();


    //Маска телефона
    $("input[name=instalink]").mask("@AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");


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



//Перевірка скролу
function scrollCheck() {
    $('.product__content').each(function () {
        var
            $this = $(this),
            thisHeight = $this.find('.product__content__inner').height(),
            thisContainerHeight = $this.height(),
            thisScroll = $this.find('.product__scroll');

        if(thisHeight >= thisContainerHeight) {
            thisScroll.show();
        } else {
            thisScroll.hide();
        }
    });
}


//Скролінг
function scrolling() {
    $('.product__content__overflow').scroll(function () {
        var
            $this = $(this),
            thisHeight = $this.find('.product__content__inner').height(),
            thisContainerHeight = $this.height(),
            thisScroll = $this.closest('.product__item').find('.product__scroll'),
            thisScrollThumb = thisScroll.find('.product__scroll__thumb'),
            scrollTop = $this.scrollTop(),
            scrollPos = 100 * scrollTop / (thisHeight - thisContainerHeight);

        thisScrollThumb.css({'top' : scrollPos+'%'});
    });
}



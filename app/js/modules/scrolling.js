$(function () {
    var w = $(window).width();

    $('.header').on('scroll mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    //--------------------------------//
    //Підгрузка картинок
    $(window).scroll(function () {
        $('.lazyLoad').each(function () {
            var
                scrollTop = $(window).scrollTop(),
                windowHeight = $(window).height(),
                $this = $(this),
                thisOffset = $this.offset().top,
                thisSrc = $this.data().src;

            if(scrollTop > thisOffset - windowHeight * 1.5) {
                if(thisSrc) {
                    $this.attr('src', thisSrc);
                } else {
                    $this.addClass('loadBack');
                }
            }
        });


        $('.lazyBg').each(function () {
            var
                scrollTop = $(window).scrollTop(),
                windowHeight = $(window).height(),
                $this = $(this),
                thisOffset = $this.offset().top,
                thisSrc = $this.data().bg;

            if(scrollTop > thisOffset - windowHeight * 1.5) {
                if(thisSrc) {
                    $this.css({'backgroundImage' : 'url('+thisSrc+')'});
                } else {
                    $this.addClass('loadBack');
                }
            }
        });
    });
    //--------------------------------//



    //--------------------------------//
    //Паралакс на наступному блоці
    function parallacsSection() {
        $(window).scroll(function () {
            $('.parallacsNext').each(function () {
                var
                    scrollTop = $(window).scrollTop(),
                    $this = $(this),
                    thisHeight = $this.outerHeight(),
                    thisNext = $this.next(),
                    thisStart = thisNext.offset().top - thisHeight,
                    headerPos = $('.header').css('position'),
                    headerHeight = $('.header').outerHeight(),
                    fixedTop = '';

                if (headerPos === 'fixed') {
                    fixedTop = headerHeight;
                } else {
                    fixedTop = 0;
                }

                if (scrollTop >= thisStart - fixedTop) {
                    $this.addClass('parallacsNextFix');
                    $this.css({'top': fixedTop});
                    thisNext.css({'margin-top': thisHeight});
                } else {
                    $this.removeClass('parallacsNextFix');
                    $this.css({'top': '0'});
                    thisNext.css({'margin-top': '0'});
                }
            });
        });
    }

    //Необхідний css
    //.parallacsNextFix {
    //    position: fixed !important;
    //    right: 0;
    //    left: 0;
    //}
    //--------------------------------//









    var
        windowWidth = $(window).width();

    if(windowWidth >= 1024) {
        parallacsSection();




        //--------------------------------------//
        //Поява елементів
        function showElements() {
            $(window).scroll(function () {
                $('.showContainer').each(function () {
                    var
                        scrollTop = $(window).scrollTop(),
                        windowHeight = $(window).height(),
                        $this = $(this),
                        thisHeightStart = $this.outerHeight() / 2,
                        thisOffset = $this.offset().top;

                    if(scrollTop + windowHeight > thisOffset + thisHeightStart) {
                        $this.removeClass('animate');
                    } else {
                        $this.addClass('animate');
                    }
                });
            });
        }
        showElements();
        //--------------------------------------//



        //--------------------------------------//
        //Появлення елементів
        $(window).scroll(function () {
            var
                scrollTop = $(window).scrollTop(),
                windowHeight = $(window).height();

            if($('.adventages__list').length > 0) {
                var
                    adventList = $('.adventages__list').offset().top;

                if(scrollTop + windowHeight >= adventList) {
                    $('.adventages__item').each(function () {
                        var
                            $this = $(this),
                            thisDelay = $this.index() * 500;

                        setTimeout(function () {
                            $this.removeClass('animate');
                        },thisDelay);
                    });
                }
            }



            //Поява елементів на сторінці "про нас"
            if($('.animateAbout').length > 0) {

                $('.animateAbout').each(function () {
                    var
                        $this = $(this),
                        abouttList = $this.offset().top;

                    if(scrollTop + windowHeight >= abouttList + 150) {
                        $this.find('h2, p, li').each(function (i) {
                            var
                                index = i++,
                                $this = $(this),
                                thisDelay = index * 300;

                            setTimeout(function () {
                                $this.addClass('animateShow');
                            },thisDelay);

                        });
                    }
                });

            }



        });
        //--------------------------------------//



        //Появлення елементів на першому блоці на сторінуі "про нас"
        $('.about__first__title').removeClass('animate');

        if($('.about__first__text').length > 0) {

            $('.about__first__text p').each(function () {
                var
                    $this = $(this),
                    thisDelay = $this.index() * 300 + 700;

                setTimeout(function () {
                    $this.addClass('animateShow');
                },thisDelay);
            });
        }
        //--------------------------------------//



        //Появлення елементів на відгуках
        if($('.reviews__item').length > 0) {

            $('.reviews__item').each(function () {
                var
                    $this = $(this),
                    thisDelay = $this.index() * 500;

                setTimeout(function () {
                    $this.removeClass('animate');
                },thisDelay);
            });
        }
        //--------------------------------------//



        $(window).scroll(function () {
            var
                scrollTop = $(window).scrollTop(),
                windowHeight = $(window).height(),
                paralacsSpeed = scrollTop / 4;


            //Скролінг на першому екрані
            $('.first__photo').css({'transform' : 'translateY(-'+paralacsSpeed+'px)'});

            if(scrollTop >= 10) {
                $('.header').addClass('scrollHeader');
            } else {
                $('.header').removeClass('scrollHeader');
            }








            //Паралакс на засновнику
            if($('.afterStop').length > 0) {
                var
                    afterStop = $('.afterStop').offset().top,
                    personParallacs = afterStop - scrollTop - windowHeight;

                if(personParallacs <= 0) {
                    $('.person__photo').css({'transform' : 'translateY('+personParallacs / 4+'px)'});
                }
            }



            //Паралакс на команді
            $('.parallacsPart').each(function () {
                var
                    $this = $(this),
                    thisSection = $('.sectionParallacs').offset().top,
                    photoParallacs = thisSection - scrollTop - windowHeight;

                if(photoParallacs <= 0) {
                    $this.css({'transform' : 'translateY('+photoParallacs / 4+'px)'});
                }
            });


        });


    } else {
        // $('.animate').removeClass('animate');
    }




});
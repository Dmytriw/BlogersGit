$(function () {

    $('.accordeon__item').each(function () {
        var
            $this = $(this),
            thisIndex = $this.index() + 1,
            thisNum = $this.find('.accordeon__number');

        thisNum.text('0'+thisIndex+'.')
    });

    $('.accordeon__title').click(function () {
        var
            $this = $(this),
            thisItem = $this.closest('li').siblings(),
            thisAnswer = $this.next();

        $this.toggleClass('openedAccordeon');
        thisAnswer.slideToggle(500);

        thisItem.find('.accordeon__title').removeClass('openedAccordeon');
        thisItem.find('.accordeon__answer').slideUp(500);
    });

});
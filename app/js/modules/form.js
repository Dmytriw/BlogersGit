$(function () {


    //Маска телефона
    $('.phoneMask').mask("+380 99 999 99 99");


    //Попередня валідація
    $('.nameInput').change(function(){
        var
            nameInput = $(this);

        if(nameInput.val().length < 1) {
            nameInput.closest('label').removeClass('valid');
        } else {
            nameInput.closest('label').addClass('valid');
        }
    });

    $('.phoneInput').change(function(){
        var
            phoneInput = $(this);

        if(phoneInput.val().length < 17) {
            phoneInput.closest('label').removeClass('valid');
        } else {
            phoneInput.closest('label').addClass('valid');
        }
    });



    //Відправлення форми з питанням
    //Валідація полів
    $('.form-submit').click(function(e){
        e.preventDefault();

        var
            $this = $(this),
            thisForm = $this.closest('form'),
            nameInput = thisForm.find('.nameInput'),
            phoneInput = thisForm.find('.phoneInput');

        if(nameInput.val().length < 1) {
            nameInput.closest('label').removeClass('valid');
        } else {
            nameInput.closest('label').addClass('valid');
        }


        if(phoneInput.val().length < 17) {
            phoneInput.closest('label').removeClass('valid');
        } else {
            phoneInput.closest('label').addClass('valid');
        }



        if(nameInput.val().length > 0 && phoneInput.val().length > 16) {
            var th = thisForm;
            $.ajax({
                type: "POST",
                url: "/mail.php",
                data: th.serialize()
            }).done(function() {
                setTimeout(function(){
                    $('#popup__form').fadeOut(500);
                    $('#form__success').fadeIn(500);
                }, 200);
                setTimeout(function(){
                    $('form').trigger("reset");
                }, 100);
                setTimeout(function(){
                    $('#form__success').fadeOut(500);
                }, 5000);
            });
            return false;
        }

    });
});
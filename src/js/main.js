//=require './jquery-3.5.1.min.js'
//=require './slick.js'
//=require './page1.js'
//=require './page8.js'


$(document).ready(function(){
    $('.hm__burger').on('click', function () {
        event.preventDefault();
        $('.header__navigation').addClass('active');
        $('body').prepend('<div class="hm__bg"></div>');

        $('.hm__bg').on('click', function () {
            event.preventDefault();
            $('.header__navigation').removeClass('active');
            $('.hm__bg').remove();
        });
    });

    $('.hm__close').on('click', function () {
        event.preventDefault();
        $('.header__navigation').removeClass('active');
        $('.hm__bg').remove();
    });

});
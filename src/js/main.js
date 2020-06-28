//=require './jquery-3.5.1.min.js'
//=require './slick.js'
//=require './select2.full.min.js'
//=require './autosize.min.js'

//=require './page1.js'
//=require './page8.js'
//=require './page5.js'


$(document).ready(function () {
  $('.hm__burger').on('click', function () {
    event.preventDefault();
    $('.header__navigation').addClass('active');
    $('body, .header').addClass('menu-open');
    $('body').prepend('<div class="hm__bg"></div>');

    $('.hm__bg').on('click', function () {
      event.preventDefault();
      $('.header__navigation').removeClass('active');
      $('body, .header').removeClass('menu-open');
      $('.hm__bg').remove();
    });
  });

  $('.hm__close').on('click', function () {
    event.preventDefault();
    $('.header__navigation').removeClass('active');
    $('body, .header').removeClass('menu-open');
    $('.hm__bg').remove();
  });

  if ($('.js-autosize-textarea').length > 0) {
    autosize($('.js-autosize-textarea'));
  }

  if ($('.js-h-section-5__accordeons').length > 0) {
    $(".js-h-section-5__accordeons .h-section-5__accordeon-top").click(function () {
      $(this)
        .toggleClass('h-section-5__accordeon-top--open')
        .siblings('.h-section-5__accordeon-main')
        .stop(true, true)
        .slideToggle(300);
    });
  }

});

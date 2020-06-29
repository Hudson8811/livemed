$(document).ready(function () {
  $('.js-custom-select').select2({
    minimumResultsForSearch: Infinity
  });

  $('.continue-step-1').click(function () {
    $("html, body").stop().animate({scrollTop: 0 }, 300, 'swing', function(){});
    $('.register-step--1').removeClass('register-step--visible');
    $('.register-steps-progbar__finished').css('width', '100%');
    $('.register-steps-progtext').html('Step 2 of 2');

    setTimeout(function () {
      $('.register-step--1').removeClass('register-step--active');
      $('.register-step--2').addClass('register-step--active');


      setTimeout(function () {
        $('.register-step--2').addClass('register-step--visible');
      }, 50);
    }, 400);
  });


  $('.continue-step-2').click(function () {
    $("html, body").stop().animate({scrollTop: 0 }, 300, 'swing', function(){});
    $('.reg-main--form').removeClass('reg-main--visible');

    setTimeout(function () {
      $('.reg-main--form').removeClass('reg-main--active');


      $('.reg-main--thanks').addClass('reg-main--active');
      setTimeout(function () {
        $('.reg-main--thanks').addClass('reg-main--visible');
      }, 50);
    }, 400);
  });

});

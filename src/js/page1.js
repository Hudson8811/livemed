if ($('.h-section-3__video').length > 0) {
  var vids = $("video");
  $.each(vids, function () {
    this.controls = false;
  });

  $(".h-section-3__video video").click(function () {
    var video = $(".h-section-3__video video")[0];
    if (video.paused && !video.controls) {
      $(".h-section-3__video-btn").attr("style", "display:none");
      video.controls = true;
      setTimeout(function () {
        video.play();
      }, 100);
    } else if (!video.paused && video.controls) {
      $(".h-section-3__video-btn").attr("style", "display:flex");
    } else {
      $(".h-section-3__video-btn").attr("style", "display:none");
    }
  });

  $(".h-section-3__video-btn").click(function () {
    var video = $(".h-section-3__video video")[0];
    $(".h-section-3__video-btn").attr("style", "display:none");
    video.controls = true;
    video.play();
  });


  $('.js-tmnews-slider').slick({
    arrows: true,
    prevArrow: '#tmnews-arrow--prev',
    nextArrow: '#tmnews-arrow--next',
    slidesToShow: 4,
    slidesToScroll: 3,
    variableWidth: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1145,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          dots: true,
          arrows: false
        }
      }
    ]
  });
}

if ($('.as-2__video').length > 0) {
    var vids = $("video");
    $.each(vids, function () {
        this.controls = false;
    });

    $(".as-2__video video").click(function () {
        var video = $(".as-2__video video")[0];
        if (video.paused && !video.controls){
            $(".h-section-3__video-btn").attr("style", "display:none");
            video.controls = true;
            setTimeout(function () {
                video.play();
            }, 100);
        } else  if (!video.paused && video.controls){
            $(".h-section-3__video-btn").attr("style", "display:flex");
        } else {
            $(".h-section-3__video-btn").attr("style", "display:none");
        }
    });

    $(".h-section-3__video-btn").click(function () {
        var video = $(".as-2__video video")[0];
        $(".h-section-3__video-btn").attr("style", "display:none");
        video.controls = true;
        video.play();
    });
}


$(document).ready(function(){
    plansSlider = undefined;
    if ($(window).width() <= 999)
        plansSlider = $('.js-plans').slick({
            arrows: false,
            dots: true,
        });

    $(window).on('resize', function(){
        if ($(window).width() <= 999){
            if (!plansSlider) {
                plansSlider = $('.js-plans').slick({
                    arrows: false,
                    dots: true,
                });
            }
        } else {
            if (plansSlider) {
                $('.js-plans').slick('unslick');
                plansSlider = undefined;
            }
        }
    });
});
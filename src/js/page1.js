import $ from './jquery-3.5.1.min'
if ($('.h-section-3__video').length > 0) {
    var vids = $("video");
    $.each(vids, function () {
        this.controls = false;
    });

    $(".h-section-3__video video").click(function () {
        var video = $(".h-section-3__video video")[0];
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
        var video = $(".h-section-3__video video")[0];
        $(".h-section-3__video-btn").attr("style", "display:none");
        video.controls = true;
        video.play();
    });
}
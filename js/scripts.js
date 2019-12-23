$(document).ready(function() {

    $(".navbar-toggler").on("click", function(a) {
        a.preventDefault(), $(".navbar").addClass("sticky")
    })

    // Smoth Scroll
    $('a[href^="#"]').on("click", function(a) {
        a.preventDefault();
        var o = this.hash,
            s = $(o);
        $("html, body").stop().animate({
            scrollTop: s.offset().top - 79
        }, 900, "swing"), $(".navbar-collapse.collapse").removeClass("show")
    })

    //Sticky
    $(window).scroll(function() {
        0 < $(window).scrollTop() ? $(".navbar").addClass("sticky") : $(".navbar").removeClass("sticky"), 50 < $(window).scrollTop() ? $(".scroll-to-top").addClass("affix") : $(".scroll-to-top").removeClass("affix")
    });

    // Carousel
    var $item = $(".carousel-item");
    var $wHeight = $(window).height();
    $item.eq(0).addClass("active");
    $item.height($wHeight);
    $item.addClass("full-screen");

    $(".carousel img").each(function() {
        var a = $(this).attr("src"),
            o = $(this).attr("data-color");
        $(this).parent().css({
            "background-image": "url(" + a + ")",
            "background-color": o
        }), $(this).remove()
    })

    // Jumbotron
    var $jtron = $('.jumbotron');
    $jtron.height($wHeight); 

    $(window).on("resize", function() {
        $wHeight = $(window).height();
        $jtron.height($wHeight);
        $item.height($wHeight);
    })
});
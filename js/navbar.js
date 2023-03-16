var an = new TimelineMax({ paused: true });

an.to(".nav-container", 1, {
    left: 0,
    ease: Expo.easeInOut,
});

an.staggerFrom(
    ".menu",
    1.5,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.1",
    "-=0.4"
);

an.reverse();
$(document).on("click", ".nav-open", function () {
    an.reversed(!an.reversed());
});

$(document).on("click", ".nav-close", function () {
    an.reversed(!an.reversed());
});

$(".menu-beranda").hover(
    function () {
        $(".navhover-beranda").css("opacity", "20%");
    },
    function () {
        $(".navhover-beranda").css("opacity", "0%");
    }
);

$(".menu-telusuri").hover(
    function () {
        $(".navhover-telusuri").css("opacity", "20%");
    },
    function () {
        $(".navhover-telusuri").css("opacity", "0%");
    }
);

$(".menu-peta").hover(
    function () {
        $(".navhover-peta").css({ opacity: "20%" });
    },
    function () {
        $(".navhover-peta").css("opacity", "0%");
    }
);

$(".menu-masuk").hover(
    function () {
        $(".navhover-masuk").css("opacity", "20%");
    },
    function () {
        $(".navhover-masuk").css("opacity", "0%");
    }
);

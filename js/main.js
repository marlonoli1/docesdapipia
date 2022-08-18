jQuery(document).ready(function ($) {

    //HEADER FIXO
    window.onscroll = function () {
        if (window.pageYOffset > 140) {
            $("#header").addClass("active")
        } else {
            $("#header").removeClass("active")
        }
    };

    $('nav a').click(function(e){
        var id = $(this).attr('href'), targetOffset = $(id).offset().top;
        if (id != "#header") {
            $('html, body').animate({
                scrollTop: targetOffset - 160
            }, 500); 
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 500); 
        }
    });

    //ISOTOPO
    let btns = $("#galeria .button-group button");

    btns.click(function (e) {
        $("#galeria .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = ($(e.target).attr("data-filter"))
        $("#galeria .grid").isotope({
            filter: selector
        });
    });

    $(window).on("load", function () {
        $("#galeria .grid").isotope({
            filter: "*"
        });
    });

    //MAGNIFIC
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: '<span class="mfp-counter">%curr% de %total%</span>'
        }
    });

    // CAROUSEL
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: true,
        lazyLoud: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
        },
    });
});
jQuery(document).ready(function ($) {

    //HEADER FIXO
    window.onscroll = function () {
        if (window.pageYOffset > 140) {
            $("#header").addClass("active")
        } else {
            $("#header").removeClass("active")
        }
    };

    //ANIMAÇÃO ROLAGEM PAGINA
    $('nav a').click(function(e){
        var id = $(this).attr('href'), targetOffset = $(id).offset().top;
        var lu = window.pageYOffset;

        if (lu == 0) {
            $('html, body').animate({
                scrollTop: targetOffset - 260
            }, 500); 
        } else {
            if (id != "#header") {
                $('html, body').animate({
                    scrollTop: targetOffset - 160
                }, 500); 
            } else {
                $('html, body').animate({
                    scrollTop: 0
                }, 500); 
            }
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
});

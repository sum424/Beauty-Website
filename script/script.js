$(document).ready(() => { 
    $(".img-slider").responsiveSlides();

    //for head nav
    $(window).on("scroll",function() {
        if($(window).scrollTop() > 0) {
            $(".header").addClass("sticky");
        } 
        else {
            $(".header").removeClass("sticky");
        }
    });
    //for head burger
    
        

        var width = $(window).width();
        if(width <= 420) {
            $(".navbar").click(function() {
                $(".icon").toggleClass("close");
                $(".navbar ul").toggleClass(".ul-disp").slideToggle(500);
            });
        }
        else {
            $(".icon").removeClass("close");
            $(".navbar ul").removeClass(".ul-disp");
        }
    //for div animation   
    AOS.init({
        duration: 1000
    });
});



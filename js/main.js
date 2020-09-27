$(document).ready(function() {
    $("#btnMenu").click(function(){
        $(".mainNav").toggleClass("hideMenu");
        $(".iconMenu").toggleClass("none");
        $(".iconCloseHide").toggleClass("iconClose")
    });
    
    $(".btnSection").click(function(){
        $(".subMenu").toggleClass("subMenuView");
        //$(this).children("ul").slideToggle();
        $("#submenuRight").toggleClass("none");
        $(".submenuDownHide").toggleClass("submenuDown");
    });
    
    $('.carousel').carousel({
      interval: 4000
    })
    
    $(window).on('scroll', function(){
        console.log('funciona');
        if($(window).scrollTop()){
            $(".supNav").addClass("hiddenSupNav");
            $('#logoHeader').css({"height":"2.3em"});
            $('.mainNav ul li a').addClass("itemNav");
            //$('.mainNav ul li a').css({"padding":".5em 0 1em 0"});
            //$(".headerBox").css({"display":"flex"});
            //$(".searchTop").css({"display":"none"});
            
        } else {
            
            $(".supNav").removeClass("hiddenSupNav");
            $('#logoHeader').css({"height":"3em"});
            $('.mainNav ul li a').removeClass("itemNav");
            //$('.mainNav ul li a').css({"padding":"1em 0"});
            //$(".headerBox").css({"display":"block"});
            //$(".searchTop").css({"display":"flex"});
        }
    })
});


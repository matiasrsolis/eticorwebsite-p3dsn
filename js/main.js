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
            $(".supNav").css({"display":"none"});
            $('#logoHeader').css({"height":"2em"});
            
        } else {
            
            $(".supNav").css({"display":"block"});
            $('#logoHeader').css({"height":"3em"});
        }
    })
});


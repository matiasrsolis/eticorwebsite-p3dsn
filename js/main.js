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
});


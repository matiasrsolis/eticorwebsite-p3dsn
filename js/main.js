$(document).ready(function() {
    $("#btnMenu").click(function(){
        $(".mainNav").toggleClass("hideMenu");
    });
    
    $(".btnSection").click(function(){
        
        $(this).children("ul").slideToggle();
    })
});
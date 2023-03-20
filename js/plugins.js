$(function () {
    "use strict";

    // arrow to apper select menu
    $(".selectmenu .fa-arrow-circle-left").on('click',function(){
        //
        $(this).toggleClass("arrowActive")
        //
        var myselectmenu = $(this).parent().parent(".selectmenu");
        myselectmenu.toggleClass("isvisible");
        if (myselectmenu.hasClass("isvisible")) {
            myselectmenu.animate({
                right : 0
            },700)
        }
        else {
            myselectmenu.animate({
                right : "-250px"
            },500)
        }
    })
    
    // select which country to appear    
    $(".selectmenu  .hh").on("click",function () {
        $($(this).data("country")).siblings().removeClass("active");
        $($(this).data("country")).addClass("active");
    });
    
    });
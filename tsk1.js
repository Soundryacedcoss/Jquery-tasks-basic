$(document).ready(function(){
    function color(){
        $(".test>p:first-of-type").animate({color:'red'},5000);
        $(".test>p:last-of-type").animate({color:'green'},5000);
    }
    color();
})
$(document).ready(function(){
     $("#bt1").click(function(){
        var a=prompt("Please write ")
        $("#ul_2").append('<li>'+a+'<button>'+"+"+'</button>'+'</li>');
     });
     $("#bt01").click(function(){
        var a=prompt("Please write ")
        $("#ul_1").append('<ul><li>'+a+'<button>'+"+"+'</button>'+'</li></ul>');
     });
     $("#bt02").click(function(){
        var a=prompt("Please write ")
        $("#ul_2").append('<ul><li>'+a+'<button>'+"+"+'</button>'+'</li></ul>');
     });

     $("#bt2").click(function(){
        var a=prompt("Please write ")
        $("#ul_4").append('<li>'+a+'<button>'+"+"+'</button>'+'</li>');
     });
     $("#bt03").click(function(){
        var a=prompt("Please write ")
        $("#ul_3").append('<ul><li>'+a+'<button>'+"+"+'</button>'+'</li></ul>');
     });
     $("#bt04").click(function(){
        var a=prompt("Please write ")
        $("#ul_4").append('<ul><li>'+a+'<button>'+"+"+'</button>'+'</li></ul>');
     });

});
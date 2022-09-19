$(document).ready(function () {
  $("#op1").click(function () {
    if ($("#op1").val()== "s") {
      $("#d1").text(1000);
    }
    else if ($("#op1").val()== "m") {
      $("#d1").text(1200);
    }
    else if ($("#op1").val()== "l") {
      $("#d1").text(1500);
    }
  });
  $("#op2").click(function(){
   if($("#op2").val()=="c1"){
      $("#d2").text(1200);
   }
   else if($("#op2").val()=="c2"){
      $("#d2").text(2200);
   }
   else if($("#op2").val()=="c3"){
      $("#d2").text(2400);
   }
  })
});

$(document).ready(function(){
    $("#confirm_password").keyup(CheckPassword);
    $("#Password").keyup(CheckPassword1);

function CheckPassword(){
    var password=$("#Password").val();
    var confirm_password=$("#confirm_password").val();
    if(password!=confirm_password && confirm_password != password){
        $("#p1").text("password not match");
    }
    // else if(confirm_password!=password){
    //     $("#p1").text("password not match22");
    // }
    else if(password==confirm_password){
        $("#p1").text("password matched");
    }
}

function CheckPassword1(){
    var password=$("#Password").val();
    var confirm_password=$("#confirm_password").val();
    if(confirm_password != password){
        $("#p1").text("password not matched").show();
    }
   else if(confirm_password==""){
        $("#p1").text("password not matched").hide();
    }
}
});


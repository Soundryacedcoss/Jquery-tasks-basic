$(document).ready(function(){
    $("#confirm_password").keyup(CheckPassword1);
    $("#Password").keyup(CheckPassword1);

function CheckPassword(){
    var password=$("#Password").val();
    var confirm_password=$("#confirm_password").val();
    // if(password!=confirm_password ){
    //     $("#p1").text("password not magtch");
    // }
    // else if(confirm_password!=password){
    //     $("#p1").text("password not match22");
    // }
     if(password==confirm_password){
        $("#p1").text("password matched");
    }
    else if(password!=confirm_password){
        $("#p1").text("not matched")
    }
}

function CheckPassword1(){
    var password=$("#Password").val();
    var confirm_password=$("#confirm_password").val();
    if(confirm_password===password){
        $("#p1").text("password matched").show();
    }
    if(confirm_password != password && password!=confirm_password ){
        $("#p1").text("password not matched").show();
    }
    if(confirm_password===""){
        $("#p1").text("password not matched").hide();
    }
    if(password===""){
        $("#p1").text("password not matched").hide();
    }
}
});


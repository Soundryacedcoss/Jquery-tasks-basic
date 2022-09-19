$(document).ready(function(){
    $("#c_p").keyup(CheckPassword);

function CheckPassword(){
    var password=$("#pass").val();
    var c_p=$("#c_p").val();
    if(password!=c_p){
        $("#p1").text("password not match")
    } else{
        $("#p1").text("password match")
    }
}
});
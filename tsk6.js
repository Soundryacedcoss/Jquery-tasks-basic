$(document).ready(function(){
    $("#bt1").click(function(){
        if($("#name1").val()=="" && $("#name2").val()==""){
        alert("Please fill the boxes.");
        $("#name1").css({"background-color":"red"})
        $("#name2").css({"background-color":"red"})
        } 
        else if($("#name1").val()==""){
            alert("Please fill the first name.");
            $("#name1").css({"background-color":"red"})
            $("#name1").focus();
            }
        else if($("#name2").val()==""){
            alert("Please fill the last name.");
            $("#name2").css({"background-color":"red"})
            $("#name2").focus();
            }
        
    });
});
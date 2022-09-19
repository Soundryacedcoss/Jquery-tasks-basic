$(document).ready(function(){
    $("#even").click(function(){
        $("tr:even").css("background-color",'lightgray');
    });
    $("#odd").click(function(){
        $("tr:odd").css("background-color",'#005A9C');
    });
});
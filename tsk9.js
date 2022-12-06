$(document).ready(function(){
   $(".Div").click((event)=>{
    let output=
    '<div><input type="text" placeholder="Enter class" ><input type="text" placeholder="Enter board"><input type="text" placeholder="Enter marks"><input type="text" placeholder="Enter division" id="division"><button class="add">+</button><button class="del">-</button></div>'
     if(event.target.className=="add"){
      $(event.target.parentNode).after(output);
     }
     if(event.target.className=="del"){
      console.log(event.target.class);
      $(event.target.parentElement).remove();
    }
   });
});
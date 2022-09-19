$(document).ready(function(){
   $("#add").click(function(){
     $("#div1").append('<table>',
        '<tr>',
         '<td><input type="text"placeholder="Enter class"></td>'
         ,'<td><input type="text" placeholder="Enter board"></td>',
         '<td><input type="text" placeholder="Enter marks"></td>',
         '<td><input type="text" placeholder="Enter division"></td>',
         '<td><button id="add">+</button><button id="del1">-</button></td>'
        ,'</tr>',
     '</table>')
   });
   $("#del1").click(function(){
    $("#div1").remove('<table>',
       '<tr>',
        '<td><input type="text"placeholder="Enter class"></td>'
        ,'<td><input type="text" placeholder="Enter board"></td>',
        '<td><input type="text" placeholder="Enter marks"></td>',
        '<td><input type="text" placeholder="Enter division"></td>',
        '<td><button id="add">+</button><button id="del1">-</button></td>'
       ,'</tr>',
    '</table>');
  });
   
});
$(document).ready(function(){
    var flower=[
        "Rose",
        "Lily", 
         "Tulip",
        "Orchid",
         "Carnation",
        "Hyacinth", 
        "Peruvian Lily",
        "Chrysanthemum",
         "Gladiolus", 
         "Anemone", 
         "Daffodil", 
        "Sunflower"
    ];
    $("#serch").autocomplete({
        source:flower
    })
});
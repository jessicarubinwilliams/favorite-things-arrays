$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();

    const favorite1 = $("#favorite1").val();
    const favorite2 = $("#favorite2").val();
    const favorite3 = $("#favorite3").val();
    const favorite4 = $("#favorite4").val();
    const favorite5 = $("#favorite5").val();

    const favoriteArray = [favorite1, favorite2, favorite3, favorite4, favorite5];

    const newFavorite1 = favoriteArray[1];
    const newFavorite2 = favoriteArray[0];
    const newFavorite3 = favoriteArray[2];

    const newFavoriteArray = [];
    newFavoriteArray.push(newFavorite1, newFavorite2, newFavorite3);

    const unordered = "<ul><li><span id='output1'></span></li><li><span id='output2'></span></li><li><span id='output3'></span></li></ul>";
    $('div#output').append(unordered);
    $('span#output1').text(newFavorite1);
    $('span#output2').text(newFavorite2);
    $('span#output3').text(newFavorite3);

    $('div#output').show();
  });
});


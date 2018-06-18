hp = $.get("http://hp-api.herokuapp.com/api/characters").then(function(data) {


data.forEach(function(characters){
    console.log(characters.name);
    console.log(characters.house);

 $('.nom').append(characters.name + '<br>' + '<br>');
 $('.house').append(characters.house + '<br>'+ '<br>');


});

});


// + '<br>' +
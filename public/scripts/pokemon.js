function next() {
    //Add 10 to the offset of the url
    // console.log(document.getElementById("url").value);
    var url = document.getElementById("url").value;
    var num1 = url.toString();
    num1 = num1.split("?");
    num1 = num1[1].split("&");
    num1 = num1[0].split("=");
    num1 = parseInt(num1[1]);
    num2 = num1 + 10;
    url = url.replace(num1, num2);
    
    // console.log(url);
    var pokemon = [];
    fetch(url)
    .then(response => response.json())
    .then((out) => {
        // console.log(data)
        document.getElementById("list").innerHTML="";
        out.results.forEach(poke => {
            pokemon.push(poke);
        });
        // console.log(pokemon);
        for (poke in pokemon) {
            // console.log(pokemon);
            // console.log(pokemon[poke].name);
            document.getElementById("list").innerHTML = document.getElementById("list").innerHTML + "<li> " + pokemon[poke].name + "</li>";
        }
        document.getElementById("url").value = url;
    });
}

function previous() {
    //Subtract 10 to the offset of the url if >= 10, otherwise offset = 0
    // console.log(document.getElementById("url").value);
    var url = document.getElementById("url").value;
    var num1 = url.toString();
    num1 = num1.split("?");
    num1 = num1[1].split("&");
    num1 = num1[0].split("=");
    num1 = parseInt(num1[1]);
    num2 = num1 - 10;
    if (num2 < 0) {
        num2 = 0;
    }
    url = url.replace(num1, num2);
    
    // console.log(url);
    var pokemon = [];
    fetch(url)
    .then(response => response.json())
    .then((out) => {
        // console.log(data)
        document.getElementById("list").innerHTML="";
        out.results.forEach(poke => {
            pokemon.push(poke);
        });
        // console.log(pokemon);
        for (poke in pokemon) {
            // console.log(pokemon);
            // console.log(pokemon[poke].name);
            document.getElementById("list").innerHTML = document.getElementById("list").innerHTML + "<li> " + pokemon[poke].name + "</li>";
        }
        document.getElementById("url").value = url;
    });
}

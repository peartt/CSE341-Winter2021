const { response } = require("express");

function display() {
    var names = [];
    fetch("https://cs341-winter2021.herokuapp.com/ta10/fetchAll") //TODO change to Heroku before deploying
    .then(response => response.json())
    .then((out) => {
        // console.log(data)
        document.getElementById("list").innerHTML="";
        out.avengers.forEach(name => {
            names.push(name);
        });
        console.log(names);
        for (name in names) {
            // console.log(pokemon);
            // console.log(pokemon[poke].name);
            document.getElementById("list").innerHTML = document.getElementById("list").innerHTML + "<li> " + names[name].name + "</li>";
        }
    });
}

function add() {
    var newName = document.getElementById("newName").value;
    console.log(newName);
    if (newName !== "") {
        //call the insert POST route with newName
        fetch(
            "https://cs341-winter2021.herokuapp.com/ta10/insert",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ newName: newName })
            }
        )
        .then(response => response.json())
        .then((out) => {
            //call display to reflect the updated list
            display();
        });
    }
    //else nothing
}
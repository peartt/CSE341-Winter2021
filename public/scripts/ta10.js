// const { response } = require("express");
const socket = io('/');

socket.on('updateNames', () => {
    display();
})

function display() {
    var names = [];
    fetch(
        "https://cs341-winter2021.herokuapp.com/ta10/fetchAll")
        // "http://localhost:5000/ta10/fetchAll")
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
            // "http://localhost:5000/ta10/insert",
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
            // socket.broadcast.emit('addNameW11')
            socket.emit('addNameW11', true)
            display();
        });
    }
    //else nothing
}
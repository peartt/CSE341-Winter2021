const socket = io('/') // This means your client will always be connected to your server, locally or on Heroku.

const errorContainer = document.getElementById('errMsg')
const usernameInput = document.getElementById('username')
const date = new Date()

// A simple async POST request function
const getData = async (url = '') => {
    const response = await fetch(url, {
        method: 'GET'
    })
    return response.json()
}

// A simple async POST request function
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

// Login user to access chat room.
const login = async () => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    const name = document.getElementById('username').value.trim();
    if (name == '') {
        document.getElementById("errMsg").innerHTML = "This isn't NGNL, your name can't be blank!";
        return;
    }

    try {
    const data = await postData('/login', {
        name
    })
    }
    catch (err) {
        console.log(err);
        return;
    }

    if (data.error) {
        document.getElementById("errMsg").innerHTML = data.error;
        return
    }
    //No errors
    socket.emit('newUser', name)
    window.location = '/chat';
}

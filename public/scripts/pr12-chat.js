const socket = io('/') // This means your client will always be connected to your server, locally or on Heroku.

const chatBox = document.getElementById('chatBox')
const messageEl = document.getElementById('message')
const user = document.getElementById('user')
const date = new Date() // Date implementation

socket.on('newMessage', data => {
    addMessage(data, false)
})

// Post message to board
const postMessage = () => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    const message = document.getElementById("message").value.trim();
    if (message == '') { return } //Empty message, don't post

    socket.emit('message', {
        message: message,
        user: true,
    })

    addMessage({
        message: message,
        user: user.value
    }, true);

    //clear the textarea and reset focus
    document.getElementById("message").value = "";
    document.getElementById("message").focus();
}

// Add message from any user to chatbox, determine if added
// by current user.
const addMessage = (data = {}, user = false) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    chatBox.innerHTML += `
    <li class="message${user ? ' uMessage ' : ''}">
        ${data.user}: ${data.message}
    </li>
    `
}

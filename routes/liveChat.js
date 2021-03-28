const express = require('express')
const router = express.Router()

const users = ['admin'] // Dummy array for users

router.get('/', (req, res, next) => {
    res.render('pages/pr12-login', {
        title: 'Prove Activity 12',
        path: '/prove12'
    })
})

// Verify login submission to access chat room.
router.post('/login', (req, res, next) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    try{
    const name = req.body.name.trim();
    if (!users.find((user) => {
        return (user.toString() == name.toString());
    }))
    {
        // console.log("name not found");
        users.push(name);
        req.session.user = name;
        res.status(200).send({ username: name});
        
    }
    else {
        res.status(409).send({ error: "Username is taken!" });
    }
}
catch(err) { console.log(err)}
})

// Render chat screen.
router.get('/chat', (req, res, next) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    res.render('pages/pr12-chat', {
        title: 'Prove Assignment 12',
        path: '/prove12',
        user: req.session.user
    })
})

module.exports = router

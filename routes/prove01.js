const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove01-1', { 
        title: 'Prove Activity 01', 
        path: '/prove01-1', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/',(req, res, next) => {
    let name = req.body.name;
    let age  = req.body.age;
    res.render('pages/prove01-2', {
        title: 'Prove Activity 01',
        path: '/prove01-2',
        name: name,
        age: age
    });

});

module.exports = router;
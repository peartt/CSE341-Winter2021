const express = require('express');
const router = express.Router();

const bookObject = []

router.post('/addBook', (req, res, next) => {
    bookObject.push({"title":req.body.title, "author":req.body.author, "summary":req.body.summary});
    res.render('pages/prove02-display', {
        title: 'Book display',
        path: '/prove02-display',
        bookTitle: req.body.title,
        summary: req.body.summary,
        bookObject: bookObject
    });
});

router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        title: 'Prove Activity 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;
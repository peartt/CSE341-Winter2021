const express = require('express');

const app = express();

app.use('/add-product', (req,res,next) => {
   console.log('This is the product area.');
   res.send('<h1>Product page</h1>'); //Sending a response, don't call next
});

app.use((req,res,next) => {
   console.log('This is the default response area.');
   res.send('<h1>Welcome to my webpage</h1>');
});

app.listen(3000);
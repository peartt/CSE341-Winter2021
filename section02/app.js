const express = require('express');

const app = express();

app.use('/users', (req,res,next) => {
    console.log("users page");
    res.send('<h1>Users page</h1>'); //test
});

app.use('/', (req,res,next) => {
    console.log("default page");
    res.send('<h1>This is the default page</h1>'); //test
});

app.listen(3030);
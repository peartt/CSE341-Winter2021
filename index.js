/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03'); 
const ta04Routes = require('./routes/ta04'); 
const ta05Routes = require('./routes/ta05'); 
const ta10Routes = require('./routes/ta10'); 
//temp, for navigating to prove01
const prove01Routes = require('./routes/prove01');
const prove02Routes = require('./routes/prove02');
const prove09Routes = require('./routes/prove09');

   app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   // For view engine as Pug
   //.set('view engine', 'pug') // For view engine as PUG. 
   // For view engine as hbs (Handlebars)
   //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
   //.set('view engine', 'hbs')
   .use(bodyParser({extended: false})) // For parsing the body of a POST
   .use('/ta01', ta01Routes)
   .use('/ta02', ta02Routes) 
   .use('/ta03', ta03Routes) 
   .use('/ta04', ta04Routes)
   .use('/ta05', ta05Routes)
   .use('/ta10', ta10Routes)
   //temp, for prove01. Currently breaks program when uncommented. Not sure why.
   .use('/prove01', prove01Routes)
   .use('/prove02', prove02Routes)
   .use('/prove09', prove09Routes)
   .get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   });
   const server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

  // Initialize socket.io
  // Make sure you `npm install socket.io socket.io-client`
  const io = require('socket.io')(server)

  // Listen for new connections
  io.on('connection', socket => {
      console.log('Client connected!')
      socket.on('disconnect', () => {
          console.log('Client disconnected!')
      })
          // 3 methods for sending data to clients:
    // io.emit(event, data)
    //      Send to all connected clients
    // socket.emit(event, data)
    //      Send ONLY to the client that sent to us
    // socket.broadcast.emit(event, data)
    //      Send to all clients EXCEPT the client that sent to us

    // Do some validation in these functions.
    // Prevent duplicates, and make sure we can actually add/remove
    // the name that was sent.
    // If something is wrong, use socket.emit to send an error
    // to the client that sent the name.

    // Listen for add events
    socket.on('addNameW11', name => {
        io.emit('updateNames', true)
    })
  })
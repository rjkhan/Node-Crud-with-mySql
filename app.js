const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const db = require('./config/db');
const path = require('path');
const app = express();
const ejsLint = require('ejs-lint');

const {getHomePage} = require('./routes/index');
const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');


// serve port
const port = 5000;


// middleware setup
// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', ejsLint); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload



app.get('/', getHomePage);
app.get('/add', addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add', addPlayer);
app.post('/edit/:id', editPlayer);

// Server 
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
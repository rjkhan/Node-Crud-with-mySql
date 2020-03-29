const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const db = require('./config/db');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
//const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');


// serve port
const port = 5000;


// middleware setup
// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

app.get('/', function(req, res){
    res.render('./views/index.ejs');
  });




// Server 
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
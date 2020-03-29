const db = require('./config/db');


const getHomePage = (req, res) =>{
    let query = "SELECT * FROM `players` ORDER BY id ASC"; 
    db.query(query, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('index.ejs', {
            title: "Welcome to Crud Operation" 
        });
    });

};


module.exports = {
   getHomePage
};

//include two routes:
//GET '/survey' will display the survey page
//Default 'home.html' displays the home page

var path = require("path");


module.exports = function(app) {
    
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "/home.html"));
    });
    
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/survey.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/home.html"));
    });
};
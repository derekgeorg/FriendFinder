//include two routes:

//Default 'home.html' displays the home page

var path = require("path");


module.exports = function(app) {
    
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    //GET '/survey' will display the survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    //Default 'home.html' displays the home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
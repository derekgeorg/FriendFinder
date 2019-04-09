//contain 2 routes


var path = require("path");

module.exports = function(app) {
    //GET '/api/friends' - display the JSON of all possible friends
    app.get("/api/friends", function(req, res){
       return res.json(friends);
    });
    
    //POST route '/api/friends' handle incoming survey results and compatibility logic
    app.post("/api/friends", function(req, res){
        return res.json(friendsArray);
    });
};

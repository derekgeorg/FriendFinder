//contain 2 routes
var friendsArray = require("../data/friends.js");

var path = require("path");

module.exports = function(app) {
    //GET '/api/friends' - display the JSON of all possible friends
    app.get("/api/friends", function(req, res){
       res.json(friendsArray);
    });
    
    //POST route '/api/friends' handle incoming survey results and compatibility logic
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        console.log(req.body);

        // console.log(newFriend);

        // for (var i = 0; i < newFriend.scores.length; i++) {
        //     console.log(newFriend.scores[i])
        //     // if (chosen === characters[i].routeName) {
        //     // return res.json(characters[i]);
        //     // }
        // }
        friendsArray.push(newFriend)
        res.json(friendsArray);
    });
};

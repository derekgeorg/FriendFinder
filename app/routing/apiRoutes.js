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

        // Need to turn Scores array into number parseInt
        // Compare newFriend Scores to friendArray scores
        // Return matches
        // for (var i = 0; i < newFriend.scores.length; i++) {
        //     console.log(newFriend.scores[i])
        //     // if (newFriend === friendArray[i].routeName) {
        //     // return res.json(friendArray.name[i]);
        //     // }
        // }
        friendsArray.push(newFriend)
        res.json(friendsArray);
    });
};

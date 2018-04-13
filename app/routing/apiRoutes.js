var friendsData = require("../data/friends");

function alertMessage(matchedFriend) {
    alert("your friend is now " + matchedFriend);
    return true;
    }

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware

//for loop
            
        var newFriend = req.body
        //console.log(newFriend)
        var matchedFriend;
        //first for loop goes through friend array
        var diffArray = [];
        for (var i = 0; i < friendsData.length; i++){
            // 2nd goes through each score


            // -----------------

            // for (i = 0; i < friendsArray.length; i++) {
            //     var diff = 0
            //     console.log("friend array scores " +friendsArray[i].scores.length);
            //     for (j = 0; j < friendsArray[i].scores.length; j++) {
            //         diff += Math.abs(friendsArray[i].scores[j] - newFriend.scores[j]);
            //     }
            //     diffArray.push(diff)
            //     console.log(diffArray);
            // }
            // ----------- 
            var diff = 0;
            //console.log(friendScore);
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                //diff += -- same as diff = diff + [math calculating]
                diff += Math.abs(friendsData[i].scores[j] - newFriend.scores[j]);
                // push to the diffArray
                
                // find the min value in that array
                // console.log(diffArray);
            }
            diffArray.push(diff);
            // diffArray = [1, 2, 3]
            console.log(diffArray)

            // for(int i=0; i<friendsData.)
            // diffArray[]
            var newFriIn = diffArray.indexOf(Math.min.apply(null, diffArray));
            // Math.min.apply(null, diffArray);
            matchedFriend = friendsData[newFriIn]
            // matchedFriend = [minVal];
            console.log(matchedFriend);
        }
            
        friendsData.push(req.body);
        res.json(matchedFriend)
    });

    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    // app.post("/api/clear", function () {
    //     // Empty out the arrays of data
    //     friendsData = [];

    //     console.log(friendsData);
    // });
};
const rater = require("rater-js");

var myRater = rater({element: document.querySelector("#rater"), rateCallback: function rateCallback(rating, done) {
    
    myDataService.rate(rate).then(function(avgRating) {
        //update the avarage rating with the one we get from the server
        myRater.setRating(avgRating);
         //we could disable the rater to prevent another rating
         //if we dont want the user to be able to change their mind
        
        //dont forget to call done
        done();
    }, function(error) {
            //handle the error
            //dont forget to call done
            done();
    });
}});

module.exports = rater; 
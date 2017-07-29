
var moviesJSON = require('../movies.json');



//home
exports.home = function(req, res){

    var movies = moviesJSON.movies;
    res.render('home', {
        title: "Star Wars Movies",
        movies : movies
    });
};

//movies_single
exports.movies_single = function(req, res){
    var episode_number=req.params.episode_number;

    res.send("This is a page for episode "+ episode_number);
};


// notFound
exports.notFound = function(req, res){
    res.send("<h2>This is not a page you are looking for</h2>");
};

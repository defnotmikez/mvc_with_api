define(function(){
    var internals = {};
    var externals = {};
    
    
    internals.films = function(callback){
        
        let movie = $('#movies').val();
        console.log(movie);
    fetch(`https://imdb-api.com/en/API/SearchMovie/k_58806p8s/${movie}`)
    .then(res => res.json())
    .then(data => callback(data)
    )
    };
        


    externals.getFilm = function(callback){
        internals.films(callback);
       
    };

    return externals;
});
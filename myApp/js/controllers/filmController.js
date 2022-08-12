define(['views/filmView', 'services/filmService'], function(filmView,filmService){
    var internals = {};
    var externals = {};

    externals.start = function(){
    internals.bindEventHandlers();
    filmView.render();

};
    internals.bindEventHandlers = function(){
        filmView.bind('button', internals.buttonHandler);
    };

    internals.buttonHandler = function(){
       
        filmService.getFilm(function(film){
            filmView.render(film);
        })   
    }
    return externals;
});
define(function () {
    var internals = {
        handlers: {},
        elements: {}
    };
    var externals = {};
    internals.createButton = function () {
        return '<br><div style="text-align:center;"><button id="randomFilm"> Click here to show movie</button></div>'
    }
    internals.createFilmCard = function (film) {
        return (
            `<div style="text-align:center;">
            
        
            <strong> Title: </strong><h4 style ="color: crimson">${film.results[0].title} </h4>
            
            <strong> Description: </strong> <h4 style ="color: crimson">${film.results[0].description}</h4>
           
            <img src="${film.results[0].image}" width = "400px" height="600px"></img>
            
            </div>
            `
        );
    };
    internals.renderFilm = function (film) {
        if (internals.elements.filmCard) {
            internals.elements.filmCard.empty();
        }
        internals.elements.filmCard = $(internals.createFilmCard(film));
        internals.elements.app.append(internals.elements.filmCard);
    };
    internals.renderButton = function () {
        if (internals.elements.button) {
            return;
        }
        internals.elements.button = $(internals.createButton());
        internals.elements.button.click(internals.handlers['button']);  
        internals.elements.app.append(internals.elements.button);
    };
    externals.bind = function (event, handler) {
        internals.handlers[event] = handler;
    };
    externals.render = function (film) {
        internals.elements.app = $('#app');
        internals.renderButton();
        if(film) {
            internals.renderFilm(film);
        }
    };
    return externals;
});
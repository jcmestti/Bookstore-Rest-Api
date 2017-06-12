// Rest Api Routes
module.exports = function(app) {
    var controllers = require("../controllers/controllers");

    app.get('/', function(req, res) {
        res.send("Home Page");
    });

    app.route('/genres')
        .get(controllers.findAllGenres)
        .post(controllers.insertGenre);

    app.route('/genres/:id')
        .get(controllers.findGenreById)
        .put(controllers.updateGenre)
        .delete(controllers.deleteGenre);

    app.route('/books')
        .get(controllers.findAllBooks)
        .post(controllers.insertBook); 

    app.route('/books/:id')
        .get(controllers.findBookById)
        .delete(controllers.deleteBook);
}

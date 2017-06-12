// Connect to mongoose
var mongoose = require('mongoose');

module.exports = function() {
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/bookstore');
    var db = mongoose.connection;
}

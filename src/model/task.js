/*module.exports = function(){
    var db = require("../libs/db-connection")();
    var Schema = require("mongoose").Schema;
    
    var Task = Schema({
        title: String,
        description: String,
        status: Boolean
    });
    
    return db.model("task", Task);
}*/

module.exports = function () {
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;

    let db;
    if (!db) {
        db = mongoose.connect("mongodb://localhost/crudExample");
    }
    
    var Task = new Schema({
        title: String,
        description: String,
        status: Boolean
    });

    return mongoose.model("task",Task);
}

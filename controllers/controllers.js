// VIEW CONTROLLER

var ObjectId = require("mongodb").ObjectId; 

module.exports = {
    viewAll: function (app, req, res) {
        console.info("View All controller")
        app.set('myDb').collection('filmsCollection').find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },
    viewItem: function (app, req, res) {
        console.info("View One controller")
            let filmID = req.params.filmID;
            var o_id = new ObjectId(filmID);
        app.set('myDb').collection('filmsCollection').find({ "_id": o_id }).toArray(function(err, docs) {
            if (err) {
                console.error(err)
            }
            console.dir(docs);
            return res.render('oneFilm', {
                title : "Some Title",
                film: docs[0]
                });
        })
    }
    // Add addItem functions
    // Add editItem and deleteItem functions
}

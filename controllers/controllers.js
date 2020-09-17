// VIEW CONTROLLER


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
        let filmID = parseInt(req.params.filmID);
        app.set('myDb').collection('filmsCollection').find({"filmID": filmID}).toArray(function(err, docs) {
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

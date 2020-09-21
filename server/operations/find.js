module.exports = function(db, app){
    app.get('/api/find', function(req, res){
        db.collection('products').find({}).toArray().then(function(docs){
            res.send(docs);
        })
    })
};
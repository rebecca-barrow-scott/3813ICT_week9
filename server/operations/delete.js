module.exports = function(db, app, ObjectID){
    app.post('/api/delete', function(req, res){
        db.collection('products', function(err, collection){
            var objectid = new ObjectID(req.body.mdb_id)
            collection.deleteOne({_id: objectid}, function(err, result){
                if (err) throw err; 
                res.send();
            })
        })
    })
};
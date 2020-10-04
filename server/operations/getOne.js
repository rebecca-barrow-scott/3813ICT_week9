module.exports = function(db, app, ObjectID){
    app.post('/api/getOne', function(req, res){
        var objectid = new ObjectID(req.body.mdb_id)
        db.collection('products').find({id: req.body.id}).toArray((err, prod) =>{
                res.send({"prod": prod[0]});
            })
    })
};
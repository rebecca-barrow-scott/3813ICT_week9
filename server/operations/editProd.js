module.exports = function(db, app, ObjectID){
    app.post('/api/editProd', function(req, res){
    const prod = {
        mdb_id: req.body.mdb_id,
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        units: req.body.units
    }
        var objectid = new ObjectID(prod.mdb_id)
        var newdata = {id: prod.id, name: prod.name, description: prod.description, price: prod.price, units: prod.units}
        db.collection('products').updateOne({_id: objectid}, {$set: newdata}, ()=>{
            res.send({"feedback": null});
        })
    });
}
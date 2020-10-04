module.exports = function(db, app){
    app.post('/api/addProd', function(req, res){
        const prod = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            units: req.body.units
        }
        db.collection('products').insertOne(prod, function(err, result){
            res.send(prod)
        });
    })
};
module.exports = function(db, app){
    app.get('/api/resetdb', function(req, res){
        product_array = [{id: 1, name: "product 1", description: "product 1 desc", price: 1.99, units: 10},
                         {id: 2, name: "product 2", description: "product 2 desc", price: 2.99, units: 15},
                         {id: 3, name: "product 3", description: "product 3 desc", price: 3.99, units: 20}]
        db.collection('products').deleteMany({}, function(err, result){
            if (err) throw err;
            db.collection('products').insertMany(product_array, function(err, result){
                if (err) throw err;
            });
        });
    })

};
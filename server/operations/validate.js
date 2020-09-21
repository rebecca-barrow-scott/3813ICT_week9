module.exports = function(db,app){
    app.post('/api/validate', function(req, res){
        const prod = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            units: req.body.units
        }
        if (prod.name == undefined){
            res.send({'feedback': "Enter a name", 'newId': prod.id});
        }
        if (prod.description == undefined){
            res.send({'feedback': "Enter a description", 'newId': prod.id});
        }
        if (prod.units == undefined){
            res.send({'feedback': "Enter a description", 'newId': prod.id});
        }
        else {
            if (prod.name.length > 50){
                res.send({'feedback': "Name must be 50 characters or less", 'newId': prod.id});
            } 
            if (prod.description.length > 255){
                res.send({'feedback': "Description must be 255 characters or less", 'newId': prod.id});
            }
            else {
                db.collection('products').find({'id': prod.id}).count((err,count) => {
                    if (count == 0 && prod.id != undefined){
                        res.send({'feeback': null, 'newId': prod.id})
                    } else {
                        //sort descending, limit by one
                        db.collection('products').find({}, {sort: {id: -1}, limit: 1}).toArray(function(err, items){
                            res.send({'feedback': null, 'newId': items[0].id+1})
                        });
                    }
                })
            }
        }
    })
   
};
product_array = [{id: 1, name: "product 1", description: "product 1 desc", price: 1, units: 10},
                 {id: 2, name: "product 2", description: "product 2 desc", price: 2, units: 15},
                 {id: 3, name: "product 3", description: "product 3 desc", price: 3, units: 20}]

module.exports = function(client, collection){
    collection.insertMany(product_array, function(err, result){
        if (err) throw err;
        console.log("add");
    })
}
module.exports = function(client, collection){
    oldData = {id: 1}
    newData = {description: "update product 1 description"}
    collection.updateOne(oldData, {$set: newData}, function(err, result){
        if (err) throw err;
        console.log("update")
    })
}
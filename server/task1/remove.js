module.exports = function(client, collection){
    deleteData = {id: 3}
    collection.deleteOne(deleteData, function(err, result){
        if (err) throw err;
        console.log("remove")
    })
}
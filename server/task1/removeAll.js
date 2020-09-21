module.exports = function(client, collection){
    collection.deleteMany({}, function(err, result){
        if (err) throw err;
        console.log("remove all");
    })
}
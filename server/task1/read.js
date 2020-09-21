module.exports = function(client, collection){
    collection.find({}).toArray(function(err, docs){
        if (err) throw err;
        console.log("Found the following records: ")
        console.log(docs)
    })
}
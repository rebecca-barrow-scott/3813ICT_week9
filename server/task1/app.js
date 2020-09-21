const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydb'
const colName = 'product'
const client = new MongoClient(url)
const removeAll = require('./removeAll')
const add = require('./add');
const read = require('./read');
const remove = require('./remove');
const update = require('./update');

client.connect(function(err){
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection(colName);
    ops(client,collection)
    client.close
})
async function ops(client, collection){
    await removeAll(client, collection)
    await add(client, collection);
    await read(client, collection);
    await update(client, collection);
    await remove(client, collection);
    await read(client, collection);
}
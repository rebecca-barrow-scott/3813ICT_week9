var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var app = express();
var http = require('http').Server(app);
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

app.use(express.static(path.join(__dirname, '../dist/week9/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if (err) {return console.log(err)}
    const dbName = "mydb";
    const db = client.db(dbName);
    require('./operations/addProd')(db, app);
    require('./operations/find')(db, app);
    require('./operations/validate')(db, app);
    require('./operations/resetdb')(db, app);
    require('./operations/getOne')(db, app, ObjectID);
    require('./operations/editProd')(db, app, ObjectID);
    require('./operations/delete')(db, app, ObjectID);

    let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server listening on: '+ host + 'port:' + port);
    console.log('Access it here: http://localhost:3000/');
    });
});

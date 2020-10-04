var assert = require('assert');
var app = require('./server.js');

let chai = require('chai');
let chaiHttp = require('chai-http');
const { Db } = require('mongodb');
let should = chai.should();
chai.use(chaiHttp);

describe('Server test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });

    describe('/api/find', () => {
        it('it should GET all the products', (done) => {
            chai.request(app)
                .get('/api/find')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/api/addProd', () => {
        it('it should insert a doc', (done) => {
            chai.request(app).post('/api/addProd').type('form').send({ 'id': 10, 'name': 'test product', 'description': 'product', 'price': '1.99','units': 10})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('name');
                    res.body.should.have.property('id');
                    done();
                });
        });
    });

    describe('/api/getOne', () => {
        it('it should get one', (done) => {
            chai.request(app).post('/api/getOne').type('form').send({ 'id': 10 })
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.equal(res.body.prod.name, 'test product');
                    done();
                });
        });
    });

    describe('/api/editProd', () => {
        it('it should edit a product', (done) => {
            chai.request(app).post('/api/editProd').type('form').send({ 'id': 10, 'name': 'update name', 'description': 'product', 'price': '1.99','units': 10})
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.equal(res.body.feedback, "successfully updated");
                    done();
                });
        });
    });

    describe('/api/delete', () => {
        it('it should delete', (done) => {
            chai.request(app).post('/api/delete').type('form').send({ 'id': 10, 'name': 'test product', 'description': 'product', 'price': '1.99','units': 10})
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.equal(res.body.deletedCount, 1);
                    done();
                });
        });
    });

    describe('/api/validate', () => {
        it('it should validate a product', (done) => {
            chai.request(app).post('/api/validate').type('form').send({ 'id': 11, 'name': "test", 'description': 'product', 'price': '1.99','units': 10})
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.equal(res.body.feedback, null);
                    done();
                });
        });
    });
});
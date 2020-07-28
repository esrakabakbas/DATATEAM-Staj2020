var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('products', ['products']);
var bodyParser = require('body-parser')

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json())


app.get('/products', function(req,res){
    console.log("I got the cheriiff")

    db.products.find(function(err,docs){
        console.log(docs);
        res.json(docs)
    })
})

app.post('/products', function(req, res){
    console.log(req.body)
    db.products.insert(req.body, function(err,doc){
        res.json(doc)
    })
})

app.delete("/products/:id", function(req,res){
    var id = req.params.id;
    console.log(id)
    db.products.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    })
})


app.put("/products/:id", function(req, res){
    var id = req.params.id;
    console.log("LOOOK : " + req.body.name)
    db.products.findAndModify({
        query: {_id: mongojs.ObjectId(id)},
        update: {$set: {name: req.body.name}},
        new: true}, function(err, doc) {
            res.json(doc);
        }
    )
})

app.listen(3000);
console.log("Server running on 3000")
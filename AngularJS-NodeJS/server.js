var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var products = [
    {
        id: 1,
        name: "laptop"
    },
    {
        id: 2,
        name: "micro-wave"
    }
];

var currentId = 2;

var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/products', function(req, res){
    res.send({products: products});
})

app.post("/products", function(req, res){
    console.log(req.body.name) //Yeni eklenenin ismini basıyor
    var productName = req.body.name;
    currentId++;

    products.push({
        id: currentId,
        name: productName
    })
    res.send("Product successfully created");
    console.log(products)
})

app.put('/products/:id', function(req, res){
    var id = req.params.id
    var newName = req.body.name;

    products.forEach(function(product, index){
        if (product.id === Number(id)) {
            product.name = newName;
        } else{
            console.log("OLMADIIIII")
        }
    })
    res.send('UPDATED');
})


app.listen(PORT, function(){
    console.log("Server listening on "+ PORT);
})
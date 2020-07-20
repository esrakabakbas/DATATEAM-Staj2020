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
    },
    {
        id: 3,
        name: "computer"
    }
];

var currentId = 2;

var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/products', function(req, res){
    res.send({products: products});
})

app.post('/products', function(req,res){
    var productName = req.body.name;
    currentId++;

    products.push({
        id: currentId,
        name: productName
    })
    res.send("Successfully created product")
})

/*app.put('/products/:id', function(req, res){
    console.log("Burası req.body: " + req.body);
    var id = req.params.id //String
    console.log("burası id: " + id)
    var newName = req.body.name;
    console.log("Burası newName: "+ newName)
    

    products.forEach(function(product, index){
        if (product.id === Number(id)) {
            product.name = newName;  //laptop=laptop oluyor
            console.log(product.name + " yehuu")
        } else{
            console.log("OLMADIIIII")
        }
    })
    res.send('UPDATED');
})*/

app.delete('/products/:id', function(req, res){
    var id = req.params.id;

    const index = products.findIndex(product => product.id === Number(id));
    products.splice(index, 1);

    res.send("Product successfully deleted");
    
})

app.listen(PORT, function(){
    console.log("Server listening on "+ PORT);
})
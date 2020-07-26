var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var todos = []

var currentId = 0;
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.use(bodyParser.json());


app.get('/todos', function(req,res){
    res.send({todos: todos})
})

app.delete('/todos/:id', function(req,res){
    var id = req.params.id;
    const index = todos.findIndex(todo => todo.id === Number(id));
    todos.splice(index, 1);

    res.send("Todo deleted")
})

app.post("/todos", function(req,res){
    console.log("bura req: "+ req.body.todotext)
    var todotext = req.body.todotext;
    console.log("*** "+todotext)
    currentId++;

    todos.push({
        id: currentId,
        todoText: todotext,
        done: false
    }); 
    res.send("Successfully added!")
} )

app.post("/todos/move/", function(req, res){
    todos.push({
        id: req.body.id,
        todoText: req.body.todotext,
        done: false
    })

    res.send("Moved!")
})





app.listen(PORT, function(){
    console.log("Server listening on "+ PORT);
})
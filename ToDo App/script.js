angular.module('todoApp', []).controller('todoController', function ($scope, $http) {

    $scope.doneList = [];

    var refresh = function () {
        $http.get("/todos").then(function (response) {
            console.log(response.data);
            $scope.todolist = response.data.todos;

        })
    }
    

    $scope.todoAdd = function () {
        console.log("Burası $scope.x " + $scope.x.todotext)
        $http.post("/todos", $scope.x).then(function (response) {
            console.log(response);
        })
        $scope.todoInput = "";

        refresh();
    }


    function checkTrue(item) {
        return item.done == true;
    }

    $scope.remove = function () {
        console.log($scope.todolist + " /*/*/*")
        $scope.doneList = $scope.todolist.filter(checkTrue);
        

        for (let i = 0; i < $scope.todolist.length; i++) {
            if ($scope.todolist[i].done) {
                $http.delete('/todos/' + $scope.todolist[i].id)
            }
        }

        refresh();
    }

    $scope.addToTodo = function(){
        console.log("BURAYA BAK: " + $scope.item);
        if(!$scope.item.done){
            $http.post("/todos/move", $scope.item).then(function(response){
                console.log("new response: "+ response)
            })
        }
        
    }

})
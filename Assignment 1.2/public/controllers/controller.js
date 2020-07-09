function AppController($scope, $http){
    console.log("Hello World from Controller!")

    var refresh = function(){
        $http.get("/contactlist").success(function(response){
            console.log("I got the data I requested");
            $scope.contactlist = response;
            $scope.contact = "";
        });
    }

    refresh();

    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post("/contactlist", $scope.contact).success(function(response){
            console.log(response);
            refresh();
        })
    }

    /*$scope.remove = function(id){
        console.log(id);
        $http.delete('/contactlist/' + id).then(function(success){
            refresh();
        },function(error){

        })
    }

    $scope.edit = function(id){
        console.log(id);
        $http.get("/contactlist/" + id).then(function(success){
            $scope.contact = success.data;
        }, function(error){

        });
    }*/

    $scope.updateContact = function(){
        console.log($scope.contact._id);
      $http.put('/contactlist/'+ $scope.contact._id, $scope.contact).then(function (success){
        console.log(success.data);
        refresh();
        },function (error){
      });
    }
    
}
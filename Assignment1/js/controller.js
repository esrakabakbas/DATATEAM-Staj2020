myAngular.controller("myController", function($scope, $http){
    $http.get("users.php").then(function(response){
            console.log(response);
            $scope.people = response.data.users;
            console.log($scope.people);
    }), function(response){
            $scope.statuscode = response.status;
            $scope.statustext = "Bir şey oldu"
    }
});

/*
//camelCase is mandatory
myAngular.directive("testDirective", function(){
    return {template: "<h3>Selamlar Burası Yeni Directive</h3>"}
});
*/
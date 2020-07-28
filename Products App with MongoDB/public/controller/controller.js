angular.module('productsApp', [])
    .controller('AppController', function ($scope, $http) {
        console.log("Hello from controller")
        var currentId = 1;

        var bring = function() {
            $http.get('/products').then(function(response){
            console.log("I got the data I requested")
            $scope.products = response.data;
        })
    }
    bring();

    $scope.createProduct = function(){
        
        $scope.product.id = currentId;
        $http.post("/products", $scope.product).then(function(response){
            console.log(response)
            currentId++;
            bring();
        })
    }

    $scope.remove = function(id){
        console.log(id);
        $http.delete("/products/"+id).then(function(response){
            currentId--;
            bring();
        });
    }

    $scope.updateProduct = function(id){
        console.log(id + " buraaaa");
       
        $scope.product = $scope.products.find(product => product._id === id)
        $http.put("/products/"+$scope.product._id, $scope.product).then(function(response){
            bring();
        })
          
        
    }


    })
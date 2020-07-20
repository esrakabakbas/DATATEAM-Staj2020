angular.module('todoApp', [])
    .controller('AppController', function ($scope, $http) {
        
        $scope.bring = function () {
            console.log("hello from bring")
            $http.get("/products").then(function (response) {
                console.log(response); // {products: Array(2)} basıyor
                $scope.products = response.data.products;
                console.log("I got the data");
                console.log($scope.products) // {products: Array(2)} basıyor
            })
        }

        $scope.createProduct = function () {
            console.log("Hello from create")
            $http.post("/products", $scope.product).then(function (response) {
                console.log(response);
                //$scope.product = "";
            })
        }

        /*$scope.updateProduct = function (productName, product) {
            console.log("Burası $scope.productName: " + productName)
            console.log(product.id)
            $http.put("/products/:"+ product.id, JSON.stringify(product)).then(function(response){
                console.log(product.id +"***")
            })
        }*/

        $scope.deleteProduct = function(productid) {
            return $http.delete('/products/'+productid)
        }

    })



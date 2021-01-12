var app = angular.module("myApp", []);

app.controller("appCtrl", function ($scope) {
    $scope.items = [];
    $scope.items1 = ['Juan', 'Pedro', 'Joel', 'Denis', 'Carlos', 'Jose', 'Luis'];
    $scope.bar = function (foo) {
        $scope.aux = foo;
    }
    $scope.currentPage = 1;
    $scope.totalRows = 7;
    $scope.numPerPage = 2;

    $scope.numPages = function () {
        return Math.ceil($scope.totalRows / $scope.numPerPage);
    };

    $scope.previus = function () {
        if($scope.currentPage > 1){
            $scope.currentPage -= 1;
        }
    };

    $scope.next = function () {
        if($scope.currentPage < $scope.numPages()){
            $scope.currentPage += 1;
        }
    };
    


});


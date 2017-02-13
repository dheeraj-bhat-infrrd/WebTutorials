/// <reference path="app/app.js" />

airbnb.controller('homeCtrl',['$scope','$http',function($scope,$http){
  $http.get('data\json\homes.json').then(function(response){
    $scope.homes=response.data;
  },function(reason){
    $scope.error=reason.data;
    });
}]).controller('destCtrl',['$scope','$http',function($scope,$http){
  $http.get('data\json\featuredDestinations.json').then(function(response){
    $scope.destinations=response.data;
  },function(reason){
    $scope.error=reason.data;
  });
}]);

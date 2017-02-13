var airbnb = angular.module('airbnb',['ui.router']);

airbnb.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home',{
    url:'/home',
    templateUrl:'home/home.html'
  })
}]);

var demoApp = angular.module('demoApp',['ui.router']);

demoApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home',{
    url: '/home',
    templateUrl: 'App/Views/view1.html',
    controller: 'SimpleController'
  })
  .state('view2',{
    url: '/view2',
    templateUrl: 'App/Views/view2.html',
    controller: 'SimpleController'
  })
}]);

var controllers = {};

controllers.SimpleController = function($scope,simpleFactory){
  $scope.customers = [];

  init();

  function init(){
    $scope.customers = simpleFactory.getCustomers();
  }
/* this adds a customer to the array of customers in view 1*/
  $scope.addCustomer = function() {
    $scope.customers.push(
      {
          name: $scope.cust.name,
          city: $scope.cust.city
      });
  };
};

demoApp.controller(controllers);

demoApp.factory('simpleFactory',function(){
  var customers = [
    {name:'Dheeraj',city:'Bangalore'},
    {name:'Sanju',city:'Bangalore'},
    {name:'Veeku',city:'Mangalore'},
    {name:'Varad',city:'Bangalore'}
  ];

  var factory= {};

  factory.getCustomers = function(){
    return customers;
  };

  return factory;
});
/*
the above code works in the same way as the one below. we can add multiple controllers and itll work the same

demoApp.controller('SimpleController',function($scope){
    $scope.customers = [
      {name:'Dheeraj',city:'Bangalore'},
      {name:'Sanju',city:'Bangalore'},
      {name:'Veeku',city:'Mangalore'},
      {name:'Varad',city:'Bangalore'}
    ];
  $scope.addCustomer = function() {
    $scope.customers.push(
      {
          name: $scope.cust.name,
          city: $scope.cust.city
      });
    };
  });
*/

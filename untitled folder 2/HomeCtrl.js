angular
  .module('slateDriver')
  .controller('HomeCtrl', HomeCtrl)

function HomeCtrl($http, $scope, $rootScope, Auth){
  var controller = this;
  $scope.hello = "Hello World"
}

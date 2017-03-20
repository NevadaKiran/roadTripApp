angular
  .module('slateDriver')
  .controller('SlateCtrl', SlateCtrl)

function SlateCtrl($http, $scope, $state){
  var controller = this;


  controller.newSlate = function(slate) {
    $http.post('/slates.json', slate)
      .success(function (response) {
        console.log(response);
        $state.go('showSlate', {id: response.id});
      })
  }
}

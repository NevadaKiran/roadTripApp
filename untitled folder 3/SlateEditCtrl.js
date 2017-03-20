angular
  .module('slateDriver')
  .controller('SlateEditCtrl', SlateEditCtrl)

function SlateEditCtrl($http, $scope, $rootScope, Auth, $stateParams, $state){
  var controller = this;

  $http.get("/slates/" + $stateParams.id + ".json")
    .then(function (response) {
      controller.slate = response.data;
    })

  controller.editSlate = function() {
    $http.put("/slates/" + controller.slate.id + ".json", controller.slate)
      .then(function (response) {
        $state.go('showSlate', {id: controller.slate.id});
      })
  }
}

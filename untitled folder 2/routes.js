angular
  .module('slateDriver')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('newSlate', {
        url: '/slate',
        templateUrl: 'views/slate.html',
        controller: 'SlateCtrl',
        controllerAs: 'slate_ctrl'
      })
      .state('showSlate', {
        url: '/slate/:id',
        templateUrl: 'views/slate_show.html',
        controller: 'SlateShowCtrl',
        controllerAs: 'slate_ctrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
    $urlRouterProvider.otherwise('/home')
  })
angular.module('museApp', ['ui.router'])
    .config(MuseRouter);

MuseRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function MuseRouter($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/artists');

  $stateProvider
    .state('artists', {
      url: "/artists",
      templateUrl: "/partials/artists.html",
    })

    // .state('artistShow', {
    //   url: "/artists/{artistId}",
    //     templateUrl: "/partials/show.html",
    //   });
    .state('artistShow',{
      url: "/artists/{artistId}",
      templateUrl: "/partials/show.html"
    })

    // .state('artist', {
    //   url: "/artists/:artists.id",
    //   templateUrl: "/partials/artist.html",
    // });

    // .state('newArtist', {
    //   url: "/artists/new",
    //   templateUrl: "/partials/newArtist.html",
    // });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}

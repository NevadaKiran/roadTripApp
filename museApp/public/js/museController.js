angular.module('museApp')
.controller('MuseController', MuseController);

function MuseController($http, $state){
  var self = this;
  self.artists = [];

  function getArtists(){
    $http.get(`http://localhost:3000/artists`)
      .then(function(response) {
        console.log(response.data);
        self.artists = response.data;
    });
  };
  function getArtist(){
    $http.get(`http://localhost:3000/artists/`)
      .then(function(response){
          self.artists = response.data;
      })
  }
function getShow(artist){
var artistToFind = artist;

self.artist = self.artists.find(function(artist){
  return artist.id === artistToFind.id;
})

  $state.go('artistShow', {artist: artist.id});
}

function addArtist(){
  $http.post('http://localhost3000/artists', self.newArtist)
  .then(function(response){
    self.artists.push(response.data);
    self.newArtist = {};

    $state.go('artists');
  })
}

  getArtists();

  self.getArtists = getArtists;
  self.getShow = getShow;
  self.addArtist = addArtist;
}

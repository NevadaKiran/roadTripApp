$(document).ready(function(){
  $("#stand").css({
    color:'blue',
    fontWeight: 'bold',
    backgroundColor:'red',
    // addClass("animated shake"),
    // $("#replay").addClass("animated shake"),
  });
});

var deal = function() {
  card = Math.floor(Math.random() * 52 + 1);
  return card;
};
$("#replay").click(function){
  
}
var Card = function(suit, cardValue, imgSrc) {
  this.suit = suit;
  this.cardValue = cardValue;
  this.imgSrc = imgSrc;
}

var deckOfCards = []
var two_of_clubs = new Card('clubs', '2', 'SVG-cards/2_of_clubs'),
var three_of_clubs = new Card('clubs', '3', 'SVG-cards/3_of_clubs'),
var four_of_clubs = new Card('clubs', '4', 'SVG-cards/4_of_clubs'),
var five_of_clubs = new Card('clubs', '5', 'SVG-cards/5_of_clubs'),
var six_of_clubs = new Card('clubs', '6', 'SVG-cards/6_of_clubs')

deckOfCards.push(two_of_clubs)


var getFirstRandomCard = function(){
    var randomNumber = Math.floor((Math.random() * 52) + 1);
    document.getElementById("card").setAttribute("src", deckOfCards[randomNumber].SVG-cards-1.3);
}

// var Card = function(n,s) {
//         var number = n;
//         var suit = s;
//
//         this.getNumber = function(){
//                 return this.number;
//         },
//         this.getSuit = function(){
//                 return this.suit;
//         },
// };

// document.getElementsById("card").setAttribute("src", deckOfCards[randomNumber].imgSrc);

// var displayCard = {
//   "2_of_clubs.svg",
//   "3_of_hearts.svg" ,
//  "4_of_clubs.svg" ,
//  "5_of_clubs.svg" ,
//  "6_of_clubs.svg";
// }

// var replay = function() {
//
// var possibleCards = [("2_of_clubs.svg" = 2), ("3_of_hearts.svg" = 3),
// ("4_of_clubs.svg" = 4), ("5_of_clubs.svg" = 5), ("6_of_clubs.svg"= 6)],
// {
// function getRandomArbitrary(2, 6) {
//   return Math.random() * (possibleCards.lenght) + min;
// };

// $('#card1').html('<img src="img/2_of_clubs.svg"></img>')
// }}


// var dealerhand = function(17, 21) {
//     card = Math.floor(Math.random()*(21 - 17 + 1)+17);
//     return cardD; //should be return card;
// }

$('#card1').html('<img src="img/2_of_clubs.svg"></img>')



// Function: creates a random card
// var deal = function() {
    // Private local variables
    // var s = Math.floor(Math.random() * 4 + 1);
    // var n = Math.floor(Math.random() * 4 + 1);

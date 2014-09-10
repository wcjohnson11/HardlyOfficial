'use strict';
angular.module('HardStrict.controllers', [])

.controller('AppCtrl', function($scope, $ionicScrollDelegate, $ionicModal, $timeout, $state, $ionicPopup) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/faq.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });


  // Triggered in the login modal to close it
  $scope.closeFaq = function() {
    $scope.modal2.hide();
  },

  // Open the login modal
  $scope.faq = function() {
    $scope.modal2.show();
  },

  $scope.startApp = function() {
    $state.go('app.playlists');
  };

  $scope.sortShow = function() {
    $scope.go('app.playlists');
  };

  $scope.showPopup = function() {
    $scope.data = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: './../templates/sort.html',
      title: 'Choose how to sort',
      scope: $scope,
    });
    $timeout(function() {
      myPopup.close(); //close the popup after 9 seconds for some reason
    }, 9000);
   };


})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    {name: 'Peter Rowans Twang an Groove', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'Friday', stage: 'Banjo'},
    {name: 'The Waybacks', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'Friday', stage: 'Banjo'},
    {name: 'John Prine', timeStart: '2:40pm', timeEnd: '3:40pm', day: 'Friday', stage: 'Banjo'},
    {name: 'Dry Branch Fire Squad', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'Friday', stage: 'Banjo'},
    {name: 'Ryan Adams', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'Friday', stage: 'Banjo'},
    {name: 'Falph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Chicken'},
    {name: 'Galph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Halph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Ialph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Jalph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'BoxStop'},
    {name: 'Kalph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Banjo'},
    {name: 'Lalph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Chicken'}
  ];
  
  $scope.showsStage = [
    {name: 'Peter Rowans Twang an Groove', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'Friday', stage: 'Banjo'},
    {name: 'The Waybacks', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'Friday', stage: 'Banjo'},
    {name: 'John Prine', timeStart: '2:40pm', timeEnd: '3:40pm', day: 'Friday', stage: 'Banjo'},
    {name: 'Dry Branch Fire Squad', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'Friday', stage: 'Banjo'},
    {name: 'Ryan Adams', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'Friday', stage: 'Banjo'},
    {name: 'Ryan Adams', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'Friday', stage: 'Banjo'},
    {name: 'PMW', timeStart: '10:30am', timeEnd: '11:00am', day: 'Friday', stage: 'Star'},
    {name: 'The Aquabats', timeStart: '11:30am', timeEnd: '12:00pm', day: 'Friday', stage: 'Star'},
    {name: 'Thao & The Get Down Stay Down', timeStart: '1:30pm', timeEnd: '2:15pm', day: 'Friday', stage: 'Star'},
    {name: 'Dave Alvin & Phil Alvin with the Guilty Ones', timeStart: '2:45pm', timeEnd: '3:45pm', day: 'Friday', stage: 'Star'},
    {name: 'Lucinda Williams', timeStart: '4:30pm', timeEnd: '5:45pm', day: 'Friday', stage: 'Star'},
    {name: 'Waxahatchee', timeStart: '12:00pm', timeEnd: '12:30pm', day: 'Friday', stage: 'Rooster'},
    {name: 'The Good Life', timeStart: '1:00pm', timeEnd: '1:40pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Jonathan Wilson', timeStart: '2:10pm', timeEnd: '2:50pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Sharon Van Etten', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Dawes', timeStart: '4:30pm', timeEnd: '5:15pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Conor Oberst', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Bill Kurchen & Too Much Fun', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'Friday', stage: 'Arrow'},
    {name: 'Buckwheat Zydeco', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'Friday', stage: 'Arrow'},
    {name: 'Hurray For The Riff Raff', timeStart: '2:35pm', timeEnd: '3:45pm', day: 'Friday', stage: 'Arrow'},
    {name: 'Cibo Matto', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'Friday', stage: 'Arrow'},
    {name: 'Yo La Tengo', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'Friday', stage: 'Arrow'},
    {name: 'Bill Kurchen & Too Much Fun', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'Friday', stage: 'Arrow'},
    {name: 'The McCrary Sisters', timeStart: '11:00am', timeEnd: '11:40am', day: 'Saturday', stage: 'Banjo'},
    {name: 'Alison Brown Quintet', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'Saturday', stage: 'Banjo'},
    {name: 'The Time Jumpers', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'Saturday', stage: 'Banjo'},
    {name: 'Holler Down The Hollow: A Salute to the Masters', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'Saturday', stage: 'Banjo'},
    {name: 'Dave Rawlings Machine', timeStart: '4:25pm', timeEnd: '5:15pm', day: 'Saturday', stage: 'Banjo'},
    {name: 'Steve Earle & The Dukes', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'Saturday', stage: 'Banjo'},
    {name: 'Horseshoe Hill', timeStart: '11:40am', timeEnd: '12:05pm', day: 'Saturday', stage: 'Bandwagon'},
    {name: 'Willie Watson', timeStart: '2:00pm', timeEnd: '2:30pm', day: 'Saturday', stage: 'Bandwagon'},
    {name: 'Heidi Clare', timeStart: '3:20pm', timeEnd: '3:50pm', day: 'Saturday', stage: 'Bandwagon'},
    {name: 'Whograss', timeStart: '11:00am', timeEnd: '11:40am', day: 'Saturday', stage: 'Star'},
    {name: 'Bad Luck Jonathan', timeStart: '12:30pm', timeEnd: '1:20pm', day: 'Saturday', stage: 'Star'},
    {name: 'Justin Townes Earle', timeStart: '2:10pm', timeEnd: '3:00pm', day: 'Saturday', stage: 'Star'},
    {name: 'Mavis Staples', timeStart: '3:55pm', timeEnd: '4:45pm', day: 'Saturday', stage: 'Star'},
    {name: 'Chris Isaak', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'Saturday', stage: 'Star'},
    {name: 'Red Baraat', timeStart: '11:40am', timeEnd: '12:30pm', day: 'Saturday', stage: 'Towers of Gold'},
    {name: 'Deltron 3030 with the 3030 Orchestra', timeStart: '1:20pm', timeEnd: '2:10pm', day: 'Saturday', stage: 'Towers of Gold'},
    {name: 'Built to Spill', timeStart: '3:05pm', timeEnd: '3:55pm', day: 'Saturday', stage: 'Towers of Gold'},
    {name: 'Social Distortion', timeStart: '4:45pm', timeEnd: '5:45pm', day: 'Saturday', stage: 'Towers of Gold'},
    {name: 'Carlene Carter', timeStart: '11:00am', timeEnd: '11:40am', day: 'Saturday', stage: 'Rooster'},
    {name: 'Buddy Millers Cavalcade of Stars', timeStart: '11:45am', timeEnd: '12:00pm', day: 'Saturday', stage: 'Rooster'},
    {name: 'Kate York', timeStart: '12:15pm', timeEnd: '12:45pm', day: 'Saturday', stage: 'Rooster'},
    {name: 'Striking Matches', timeStart: '1:00pm', timeEnd: '1:30pm', day: 'Saturday', stage: 'Rooster'},
    {name: 'Nikki Lane', timeStart: '1:40pm', timeEnd: '2:10pm', day: 'Saturday', stage: 'Rooster'},
    {name: 'Shawn Colvin', timeStart: '2:25pm', timeEnd: '3:05pm', day: 'Saturday', stage: 'Rooster'},
    {name: 'Tony Joe White', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'Saturday', stage: 'Rooster'},
    {name: 'Buddy Miller and Friends', timeStart: '4:15pm', timeEnd: '5:00pm', day: 'Saturday', stage: 'Rooster'},
    {name: 'Robert Earl Keen', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'Saturday', stage: 'Rooster'},
    {name: 'Evolfo', timeStart: '11:00am', timeEnd: '11:40am', day: 'Saturday', stage: 'Arrow'},
    {name: 'Blue Rodeo', timeStart: '12:05pm', timeEnd: '12:50pm', day: 'Saturday', stage: 'Arrow'},
    {name: 'Johnnyswim', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'Saturday', stage: 'Arrow'},
    {name: 'St. Paul & The Broken Bones', timeStart: '2:30pm', timeEnd: '3:20pm', day: 'Saturday', stage: 'Arrow'},
    {name: 'Jon Batiste & Stay Human', timeStart: '3:50pm', timeEnd: '4:30pm', day: 'Saturday', stage: 'Arrow'},
    {name: 'Reckless Kelly', timeStart: '4:55pm', timeEnd: '5:45pm', day: 'Saturday', stage: 'Arrow'},
    {name: 'The Flatlanders', timeStart: '6:15pm', timeEnd: '7:00pm', day: 'Saturday', stage: 'Arrow'},
    {name: 'The Mastersons', timeStart: '11:00am', timeEnd: '11:40am', day: 'Saturday', stage: 'Porch'},
    {name: 'Roses Pawn Shop', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'Saturday', stage: 'Porch'},
    {name: 'The Felice Brothers', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'Saturday', stage: 'Porch'},
    {name: 'Parker Millsap', timeStart: '2:40pm', timeEnd: '3:30pm', day: 'Saturday', stage: 'Porch'},
    {name: 'Jessica Hernandez & The Deltas', timeStart: '3:50pm', timeEnd: '4:35pm', day: 'Saturday', stage: 'Porch'},
    {name: 'Chris Smither', timeStart: '4:50pm', timeEnd: '5:35pm', day: 'Saturday', stage: 'Porch'},
    {name: 'Sister Sparrow & The Dirty Birds', timeStart: '6:05pm', timeEnd: '6:50pm', day: 'Saturday', stage: 'Porch'},
    {name: 'Malawi Mouse Boys', timeStart: '11:00am', timeEnd: '11:40am', day: 'Sunday', stage: 'Banjo'},
    {name: 'Hot Rize feat. Red Knuckles & The Trailblazers', timeStart: '12:05pm', timeEnd: '12:55pm', day: 'Sunday', stage: 'Banjo'},
    {name: 'Jerry Douglas Presents Earls of Leicester', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'Sunday', stage: 'Banjo'},
    {name: 'Ralph Stanley & The Clinch Mountain Boys', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'Sunday', stage: 'Banjo'},
    {name: 'Tweedy', timeStart: '4:05pm', timeEnd: '5:15pm', day: 'Sunday', stage: 'Banjo'},
    {name: 'Emmylou Harris', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'Sunday', stage: 'Banjo'},
    {name: 'Alison Browne', timeStart: '11:40am', timeEnd: '12:10pm', day: 'Sunday', stage: 'Bandwagon'},
    {name: 'JB Nimble', timeStart: '2:15pm', timeEnd: '2:30pm', day: 'Sunday', stage: 'Bandwagon'},
    {name: 'Robbie Fulks', timeStart: '11:45am', timeEnd: '12:30pm', day: 'Sunday', stage: 'Star'},
    {name: 'The Lone Bellow', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'Sunday', stage: 'Star'},
    {name: 'Rosanne Cash', timeStart: '2:50pm', timeEnd: '3:40pm', day: 'Sunday', stage: 'Star'},
    {name: 'Lake Street Dive', timeStart: '4:30pm', timeEnd: '5:20pm', day: 'Sunday', stage: 'Star'},
    {name: 'Bruce Cockburn', timeStart: '6:10pm', timeEnd: '7:00pm', day: 'Sunday', stage: 'Star'},
    {name: 'The Apache Relay', timeStart: '11:00am', timeEnd: '11:40am', day: 'Sunday', stage: 'Towers of Gold'},
    {name: 'Laurie Lewis & The Right Hands', timeStart: '12:30pm', timeEnd: '1:15pm', day: 'Sunday', stage: 'Towers of Gold'},
    {name: 'Bonnie "Prince" Billy & The Cairo Gang Feat. Dawn McCarthy', timeStart: '2:00pm', timeEnd: '2:50pm', day: 'Sunday', stage: 'Towers of Gold'},
    {name: 'Bela Fleck & Abigail Washburn', timeStart: '3:40pm', timeEnd: '4:30pm', day: 'Sunday', stage: 'Towers of Gold'},
    {name: 'Dwight Yoakam', timeStart: '5:20pm', timeEnd: '6:10pm', day: 'Sunday', stage: 'Towers of Gold'},
    {name: 'The Go To Hell Man Clan', timeStart: '11:00am', timeEnd: '11:40am', day: 'Sunday', stage: 'Rooster'},
    {name: 'Kevin Welch, Kieran Kane & Fats Kaplan', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'Sunday', stage: 'Rooster'},
    {name: 'Sun Kil Moon', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'Sunday', stage: 'Rooster'},
    {name: 'Chuck Prophet & The Mission Express', timeStart: '2:45pm', timeEnd: '3:30pm', day: 'Sunday', stage: 'Rooster'},
    {name: 'T Bone Burnett', timeStart: '4:00pm', timeEnd: '5:00pm', day: 'Sunday', stage: 'Rooster'},
    {name: 'Jason Isbell', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'Sunday', stage: 'Rooster'},
    {name: 'The Sam Chase', timeStart: '11:00am', timeEnd: '11:40am', day: 'Sunday', stage: 'Arrow'},
    {name: 'Nitty Gritty Dirt Band', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'Sunday', stage: 'Arrow'},
    {name: 'Moonalice', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'Sunday', stage: 'Arrow'},
    {name: 'Blackie & The Rodeo Kings', timeStart: '2:45pm', timeEnd: '3:40pm', day: 'Sunday', stage: 'Arrow'},
    {name: 'Lukas Nelson & Promise of The Real', timeStart: '4:10pm', timeEnd: '5:10pm', day: 'Sunday', stage: 'Arrow'},
    {name: 'Joe Russos Almost Dead', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'Sunday', stage: 'Arrow'},
    {name: 'Jesse DeNatale', timeStart: '11:00am', timeEnd: '11:40am', day: 'Sunday', stage: 'Porch'},
    {name: 'Chuck Cannon', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'Sunday', stage: 'Porch'},
    {name: 'The High Bar Gang', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'Sunday', stage: 'Porch'},
    {name: 'Shelly Colvin', timeStart: '2:40pm', timeEnd: '3:25pm', day: 'Sunday', stage: 'Porch'},
    {name: 'Caitlin Rose', timeStart: '3:55pm', timeEnd: '4:40pm', day: 'Sunday', stage: 'Porch'},
    {name: 'Sarah Jarosz', timeStart: '5:10pm', timeEnd: '5:55pm', day: 'Sunday', stage: 'Porch'},
    {name: 'Rising Appalachia', timeStart: '6:20pm', timeEnd: '7:00pm', day: 'Sunday', stage: 'Porch'}
  ];

  $scope.favorites = [];

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

'use strict';
angular.module('HardStrict.controllers', [])

.factory('ScheduleService', function() {
  var schedule = [
    {favorite: false, name: 'Peter Rowan\'s Twang an\' Groove', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'The Waybacks', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'John Prine', timeStart: '2:40pm', timeEnd: '3:40pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Dry Branch Fire Squad', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Ryan Adams', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'PMW', timeStart: '10:30am', timeEnd: '11:00am', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'The Aquabats', timeStart: '11:30am', timeEnd: '12:00pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Thao & The Get Down Stay Down', timeStart: '1:30pm', timeEnd: '2:15pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Dave Alvin & Phil Alvin with the Guilty Ones', timeStart: '2:45pm', timeEnd: '3:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Lucinda Williams', timeStart: '4:30pm', timeEnd: '5:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Waxahatchee', timeStart: '12:00pm', timeEnd: '12:30pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'The Good Life', timeStart: '1:00pm', timeEnd: '1:40pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Jonathan Wilson', timeStart: '2:10pm', timeEnd: '2:50pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Sharon Van Etten', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Dawes', timeStart: '4:30pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Conor Oberst', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Bill Kirchen & Too Much Fun', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Buckwheat Zydeco', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Hurray For The Riff Raff', timeStart: '2:35pm', timeEnd: '3:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Cibo Matto', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Yo La Tengo', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'The McCrary Sisters', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Alison Brown Quintet', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'The Time Jumpers', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Holler Down The Hollow: A Hardly Strictly Salute to the Masters', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Dave Rawlings Machine', timeStart: '4:25pm', timeEnd: '5:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Steve Earle & The Dukes', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Horseshoe Hill', timeStart: '11:40am', timeEnd: '12:05pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Willie Watson', timeStart: '2:00pm', timeEnd: '2:30pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Heidi Clare', timeStart: '3:20pm', timeEnd: '3:50pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Whograss', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Bad Luck Jonathan', timeStart: '12:30pm', timeEnd: '1:20pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Justin Townes Earle', timeStart: '2:10pm', timeEnd: '3:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Mavis Staples', timeStart: '3:55pm', timeEnd: '4:45pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Chris Isaak', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Red Baraat', timeStart: '11:40am', timeEnd: '12:30pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Deltron 3030 with the 3030 Orchestra', timeStart: '1:20pm', timeEnd: '2:10pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Built to Spill', timeStart: '3:05pm', timeEnd: '3:55pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Social Distortion', timeStart: '4:45pm', timeEnd: '5:45pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Carlene Carter', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Buddy Miller\'s Cavalcade of Stars', timeStart: '11:45am', timeEnd: '12:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Kate York', timeStart: '12:15pm', timeEnd: '12:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Striking Matches', timeStart: '1:00pm', timeEnd: '1:30pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Nikki Lane', timeStart: '1:40pm', timeEnd: '2:10pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Shawn Colvin', timeStart: '2:25pm', timeEnd: '3:05pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Tony Joe White', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Buddy Miller and Friends', timeStart: '4:15pm', timeEnd: '5:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Robert Earl Keen', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Evolfo', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Blue Rodeo', timeStart: '12:05pm', timeEnd: '12:50pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Johnnyswim', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'St. Paul & The Broken Bones', timeStart: '2:30pm', timeEnd: '3:20pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Jon Batiste & Stay Human', timeStart: '3:50pm', timeEnd: '4:30pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Reckless Kelly', timeStart: '4:55pm', timeEnd: '5:45pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'The Flatlanders ft. Joe Ely, Jimmie Dale Gilmour & Butch Hancock', timeStart: '6:15pm', timeEnd: '7:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'The Mastersons', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Rose\'s Pawn Shop', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'The Felice Brothers', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Parker Millsap', timeStart: '2:40pm', timeEnd: '3:30pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Jessica Hernandez & The Deltas', timeStart: '3:50pm', timeEnd: '4:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Chris Smither', timeStart: '4:50pm', timeEnd: '5:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Sister Sparrow & The Dirty Birds', timeStart: '6:05pm', timeEnd: '6:50pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Malawi Mouse Boys', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Hot Rize ft. Red Knuckles & The Trailblazers', timeStart: '12:05pm', timeEnd: '12:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Jerry Douglas Presents Earls of Leicester', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Ralph Stanley & The Clinch Mountain Boys', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Tweedy', timeStart: '4:05pm', timeEnd: '5:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Emmylou Harris', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Alison Browne', timeStart: '11:40am', timeEnd: '12:10pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'JB Nimble', timeStart: '2:15pm', timeEnd: '2:30pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Frank and Sam', timeStart: '5:10pm', timeEnd: '5:45pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Robbie Fulks', timeStart: '11:45am', timeEnd: '12:30pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'The Lone Bellow', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Rosanne Cash', timeStart: '2:50pm', timeEnd: '3:40pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Lake Street Dive', timeStart: '4:30pm', timeEnd: '5:20pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Bruce Cockburn', timeStart: '6:10pm', timeEnd: '7:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'The Apache Relay', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Laurie Lewis & The Right Hands', timeStart: '12:30pm', timeEnd: '1:15pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Bonnie "Prince" Billy & The Cairo Gang Feat. Dawn McCarthy', timeStart: '2:00pm', timeEnd: '2:50pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Bela Fleck & Abigail Washburn', timeStart: '3:40pm', timeEnd: '4:30pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Dwight Yoakam', timeStart: '5:20pm', timeEnd: '6:10pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'The Go To Hell Man Clan', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Kevin Welch, Kieran Kane & Fats Kaplan', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Sun Kil Moon', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Chuck Prophet & The Mission Express "Strings in the Temple"', timeStart: '2:45pm', timeEnd: '3:30pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'T Bone Burnett', timeStart: '4:00pm', timeEnd: '5:00pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Jason Isbell', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'The Sam Chase', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Nitty Gritty Dirt Band', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Moonalice', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Blackie & The Rodeo Kings', timeStart: '2:45pm', timeEnd: '3:40pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Lukas Nelson & Promise of The Real', timeStart: '4:10pm', timeEnd: '5:10pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Joe Russo\'s Almost Dead', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Jesse DeNatale', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Chuck Cannon', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'The High Bar Gang', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Shelly Colvin', timeStart: '2:40pm', timeEnd: '3:25pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Caitlin Rose', timeStart: '3:55pm', timeEnd: '4:40pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Sarah Jarosz', timeStart: '5:10pm', timeEnd: '5:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Rising Appalachia', timeStart: '6:20pm', timeEnd: '7:00pm', day: 'SUN', stage: 'PORCH'}
  ];
  return schedule;

})

.controller('AppCtrl', function($rootScope, $scope, $ionicScrollDelegate, $ionicModal, $timeout, $state, $ionicPopup, ScheduleService) {
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

  $scope.triggerSortAZ = function($scope) {
    $rootScope.$broadcast('sortAZ', $scope);
  };

  $scope.triggerSortStage = function($scope) {
    $rootScope.$broadcast('sortStage', $scope);
  };

  $scope.triggerSortFav = function($scope) {
    $rootScope.$broadcast('sortFav', $scope);
  };


})

.controller('PlaylistsCtrl', function($scope, $ionicPopup, $timeout, $ionicScrollDelegate, ScheduleService, $ionicModal) {
  
  $scope.showsStage = [
    {favorite: false, name: 'Peter Rowan\'s Twang an\' Groove', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'The Waybacks', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'John Prine', timeStart: '2:40pm', timeEnd: '3:40pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Dry Branch Fire Squad', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Ryan Adams', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'PMW', timeStart: '10:30am', timeEnd: '11:00am', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'The Aquabats', timeStart: '11:30am', timeEnd: '12:00pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Thao & The Get Down Stay Down', timeStart: '1:30pm', timeEnd: '2:15pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Dave Alvin & Phil Alvin with the Guilty Ones', timeStart: '2:45pm', timeEnd: '3:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Lucinda Williams', timeStart: '4:30pm', timeEnd: '5:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Waxahatchee', timeStart: '12:00pm', timeEnd: '12:30pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'The Good Life', timeStart: '1:00pm', timeEnd: '1:40pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Jonathan Wilson', timeStart: '2:10pm', timeEnd: '2:50pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Sharon Van Etten', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Dawes', timeStart: '4:30pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Conor Oberst', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Bill Kirchen & Too Much Fun', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Buckwheat Zydeco', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Hurray For The Riff Raff', timeStart: '2:35pm', timeEnd: '3:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Cibo Matto', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Yo La Tengo', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'The McCrary Sisters', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Alison Brown Quintet', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'The Time Jumpers', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Holler Down The Hollow: A Hardly Strictly Salute to the Masters', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Dave Rawlings Machine', timeStart: '4:25pm', timeEnd: '5:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Steve Earle & The Dukes', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Horseshoe Hill', timeStart: '11:40am', timeEnd: '12:05pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Willie Watson', timeStart: '2:00pm', timeEnd: '2:30pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Heidi Clare', timeStart: '3:20pm', timeEnd: '3:50pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Whograss', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Bad Luck Jonathan', timeStart: '12:30pm', timeEnd: '1:20pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Justin Townes Earle', timeStart: '2:10pm', timeEnd: '3:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Mavis Staples', timeStart: '3:55pm', timeEnd: '4:45pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Chris Isaak', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Red Baraat', timeStart: '11:40am', timeEnd: '12:30pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Deltron 3030 with the 3030 Orchestra', timeStart: '1:20pm', timeEnd: '2:10pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Built to Spill', timeStart: '3:05pm', timeEnd: '3:55pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Social Distortion', timeStart: '4:45pm', timeEnd: '5:45pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Carlene Carter', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Buddy Miller\'s Cavalcade of Stars', timeStart: '11:45am', timeEnd: '12:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Kate York', timeStart: '12:15pm', timeEnd: '12:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Striking Matches', timeStart: '1:00pm', timeEnd: '1:30pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Nikki Lane', timeStart: '1:40pm', timeEnd: '2:10pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Shawn Colvin', timeStart: '2:25pm', timeEnd: '3:05pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Tony Joe White', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Buddy Miller and Friends', timeStart: '4:15pm', timeEnd: '5:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Robert Earl Keen', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Evolfo', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Blue Rodeo', timeStart: '12:05pm', timeEnd: '12:50pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Johnnyswim', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'St. Paul & The Broken Bones', timeStart: '2:30pm', timeEnd: '3:20pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Jon Batiste & Stay Human', timeStart: '3:50pm', timeEnd: '4:30pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Reckless Kelly', timeStart: '4:55pm', timeEnd: '5:45pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'The Flatlanders ft. Joe Ely, Jimmie Dale Gilmour & Butch Hancock', timeStart: '6:15pm', timeEnd: '7:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'The Mastersons', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Rose\'s Pawn Shop', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'The Felice Brothers', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Parker Millsap', timeStart: '2:40pm', timeEnd: '3:30pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Jessica Hernandez & The Deltas', timeStart: '3:50pm', timeEnd: '4:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Chris Smither', timeStart: '4:50pm', timeEnd: '5:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Sister Sparrow & The Dirty Birds', timeStart: '6:05pm', timeEnd: '6:50pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Malawi Mouse Boys', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Hot Rize ft. Red Knuckles & The Trailblazers', timeStart: '12:05pm', timeEnd: '12:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Jerry Douglas Presents Earls of Leicester', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Ralph Stanley & The Clinch Mountain Boys', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Tweedy', timeStart: '4:05pm', timeEnd: '5:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Emmylou Harris', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Alison Browne', timeStart: '11:40am', timeEnd: '12:10pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'JB Nimble', timeStart: '2:15pm', timeEnd: '2:30pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Frank and Sam', timeStart: '5:10pm', timeEnd: '5:45pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Robbie Fulks', timeStart: '11:45am', timeEnd: '12:30pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'The Lone Bellow', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Rosanne Cash', timeStart: '2:50pm', timeEnd: '3:40pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Lake Street Dive', timeStart: '4:30pm', timeEnd: '5:20pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Bruce Cockburn', timeStart: '6:10pm', timeEnd: '7:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'The Apache Relay', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Laurie Lewis & The Right Hands', timeStart: '12:30pm', timeEnd: '1:15pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Bonnie "Prince" Billy & The Cairo Gang Feat. Dawn McCarthy', timeStart: '2:00pm', timeEnd: '2:50pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Bela Fleck & Abigail Washburn', timeStart: '3:40pm', timeEnd: '4:30pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Dwight Yoakam', timeStart: '5:20pm', timeEnd: '6:10pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'The Go To Hell Man Clan', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Kevin Welch, Kieran Kane & Fats Kaplan', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Sun Kil Moon', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Chuck Prophet & The Mission Express "Strings in the Temple"', timeStart: '2:45pm', timeEnd: '3:30pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'T Bone Burnett', timeStart: '4:00pm', timeEnd: '5:00pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Jason Isbell', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'The Sam Chase', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Nitty Gritty Dirt Band', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Moonalice', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Blackie & The Rodeo Kings', timeStart: '2:45pm', timeEnd: '3:40pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Lukas Nelson & Promise of The Real', timeStart: '4:10pm', timeEnd: '5:10pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Joe Russo\'s Almost Dead', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Jesse DeNatale', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Chuck Cannon', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'The High Bar Gang', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Shelly Colvin', timeStart: '2:40pm', timeEnd: '3:25pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Caitlin Rose', timeStart: '3:55pm', timeEnd: '4:40pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Sarah Jarosz', timeStart: '5:10pm', timeEnd: '5:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Rising Appalachia', timeStart: '6:20pm', timeEnd: '7:00pm', day: 'SUN', stage: 'PORCH'}
  ];

  $scope.showsAZ = [
    {favorite: false, name: 'The Aquabats', timeStart: '11:30am', timeEnd: '12:00pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Alison Brown Quintet', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Alison Brown', timeStart: '11:40am', timeEnd: '12:10pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Bill Kirchen & Too Much Fun', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Bad Luck Jonathan', timeStart: '12:30pm', timeEnd: '1:20pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Bela Fleck & Abigail Washburn', timeStart: '3:40pm', timeEnd: '4:30pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Blackie & The Rodeo Kings', timeStart: '2:45pm', timeEnd: '3:40pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Blue Rodeo', timeStart: '12:05pm', timeEnd: '12:50pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Bonnie "Prince" Billy & The Cairo Gang Feat. Dawn McCarthy', timeStart: '2:00pm', timeEnd: '2:50pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Bruce Cockburn', timeStart: '6:10pm', timeEnd: '7:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Buckwheat Zydeco', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Buddy Miller and Friends', timeStart: '4:15pm', timeEnd: '5:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Buddy Miller\'s Cavalcade of Stars', timeStart: '11:45am', timeEnd: '12:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Built to Spill', timeStart: '3:05pm', timeEnd: '3:55pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Caitlin Rose', timeStart: '3:55pm', timeEnd: '4:40pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Carlene Carter', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Chris Isaak', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Chris Smither', timeStart: '4:50pm', timeEnd: '5:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Chuck Cannon', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Chuck Prophet & The Mission Express "Strings in the Temple"', timeStart: '2:45pm', timeEnd: '3:30pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Cibo Matto', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Conor Oberst', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Dave Alvin & Phil Alvin with the Guilty Ones', timeStart: '2:45pm', timeEnd: '3:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Dave Rawlings Machine', timeStart: '4:25pm', timeEnd: '5:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Dawes', timeStart: '4:30pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Deltron 3030 with the 3030 Orchestra', timeStart: '1:20pm', timeEnd: '2:10pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Dry Branch Fire Squad', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Dwight Yoakam', timeStart: '5:20pm', timeEnd: '6:10pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Emmylou Harris', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Evolfo', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Frank and Sam', timeStart: '5:10pm', timeEnd: '5:45pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Heidi Clare', timeStart: '3:20pm', timeEnd: '3:50pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Holler Down The Hollow: A Hardly Strictly Salute to the Masters', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Horseshoe Hill', timeStart: '11:40am', timeEnd: '12:05pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Hot Rize ft. Red Knuckles & The Trailblazers', timeStart: '12:05pm', timeEnd: '12:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Hurray For The Riff Raff', timeStart: '2:35pm', timeEnd: '3:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Jason Isbell', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'JB Nimble', timeStart: '2:15pm', timeEnd: '2:30pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Jerry Douglas Presents Earls of Leicester', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Jesse DeNatale', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Jessica Hernandez & The Deltas', timeStart: '3:50pm', timeEnd: '4:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Joe Russo\'s Almost Dead', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'John Prine', timeStart: '2:40pm', timeEnd: '3:40pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Johnnyswim', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Jon Batiste & Stay Human', timeStart: '3:50pm', timeEnd: '4:30pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Jonathan Wilson', timeStart: '2:10pm', timeEnd: '2:50pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Justin Townes Earle', timeStart: '2:10pm', timeEnd: '3:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Kate York', timeStart: '12:15pm', timeEnd: '12:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Kevin Welch, Kieran Kane & Fats Kaplan', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Lake Street Dive', timeStart: '4:30pm', timeEnd: '5:20pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Laurie Lewis & The Right Hands', timeStart: '12:30pm', timeEnd: '1:15pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Lucinda Williams', timeStart: '4:30pm', timeEnd: '5:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Lukas Nelson & Promise of The Real', timeStart: '4:10pm', timeEnd: '5:10pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Malawi Mouse Boys', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Mavis Staples', timeStart: '3:55pm', timeEnd: '4:45pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Moonalice', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Nikki Lane', timeStart: '1:40pm', timeEnd: '2:10pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Nitty Gritty Dirt Band', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Parker Millsap', timeStart: '2:40pm', timeEnd: '3:30pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Peter Rowan\'s Twang an\' Groove', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'PMW', timeStart: '10:30am', timeEnd: '11:00am', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Ralph Stanley & The Clinch Mountain Boys', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Red Baraat', timeStart: '11:40am', timeEnd: '12:30pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Reckless Kelly', timeStart: '4:55pm', timeEnd: '5:45pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Rose\'s Pawn Shop', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Rising Appalachia', timeStart: '6:20pm', timeEnd: '7:00pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Robert Earl Keen', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Robbie Fulks', timeStart: '11:45am', timeEnd: '12:30pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Rosanne Cash', timeStart: '2:50pm', timeEnd: '3:40pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Ryan Adams', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Shawn Colvin', timeStart: '2:25pm', timeEnd: '3:05pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Sarah Jarosz', timeStart: '5:10pm', timeEnd: '5:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Sharon Van Etten', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Shelly Colvin', timeStart: '2:40pm', timeEnd: '3:25pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Sister Sparrow & The Dirty Birds', timeStart: '6:05pm', timeEnd: '6:50pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Social Distortion', timeStart: '4:45pm', timeEnd: '5:45pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Steve Earle & The Dukes', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'St. Paul & The Broken Bones', timeStart: '2:30pm', timeEnd: '3:20pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Striking Matches', timeStart: '1:00pm', timeEnd: '1:30pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Sun Kil Moon', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'T Bone Burnett', timeStart: '4:00pm', timeEnd: '5:00pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Thao & The Get Down Stay Down', timeStart: '1:30pm', timeEnd: '2:15pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'The Apache Relay', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'The Felice Brothers', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'The Flatlanders ft. Joe Ely, Jimmie Dale Gilmour & Butch Hancock', timeStart: '6:15pm', timeEnd: '7:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'The Go To Hell Man Clan', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'The Good Life', timeStart: '1:00pm', timeEnd: '1:40pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'The High Bar Gang', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'The Lone Bellow', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'The Mastersons', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'The McCrary Sisters', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'The Sam Chase', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'The Time Jumpers', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'The Waybacks', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Tony Joe White', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Tweedy', timeStart: '4:05pm', timeEnd: '5:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Waxahatchee', timeStart: '12:00pm', timeEnd: '12:30pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Whograss', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Willie Watson', timeStart: '2:00pm', timeEnd: '2:30pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Yo La Tengo', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ARROW'}
  ];

  $scope.getItemHeight = function (item) {
    var iLength = item.name.length;
    if (iLength > 30) {
      return 140;
    } else if (iLength > 17) {
      return 100;
    } else {
      return 73;
    }
  };

  $scope.toggleFave = function (item) {
    if (item.favorite) {
      item.favorite = false;
    } else {
      item.favorite = true;
    }
  };
  
 
  $scope.sortName = function () {
    var sorted = $scope.showsAZ;
    $scope.showsStage = sorted;
  };

  $scope.sortStage = function () {
    $scope.showsStage = ScheduleService;
  };

  $scope.sortFav = function () {
    var sorted = $scope.showsStage;
    var sorted2 = $scope.showsAZ;
    var favSorted;
    sorted = sorted.filter(function(a) {
      if (a.favorite) {
        return a;
      }
    });
    sorted2 = sorted2.filter(function(a) {
      if (a.favorite) {
        return a;
      }
    });
    favSorted = sorted.concat(sorted2);
    var sortedList;
    var makeSortedList;
    makeSortedList = function () {
      if (favSorted.length) {
        sortedList = favSorted;
      } else {
        sortedList = [{name: 'Star some artists to make your own custom lineup! \n It\'s the easiest way to stay on top of all this great music!', stage:'Hardly Strictly Advice'}];
      }
    };
    makeSortedList();
    $scope.showsStage = sortedList;
    $ionicScrollDelegate.scrollTop(true);
  };

  $scope.$on('sortAZ', function(event, args) {
    $scope.sortName();
  });

  $scope.$on('sortStage', function(event, args) {
    $scope.sortStage();
  });

  $scope.$on('sortFav', function(event, args) {
    $scope.sortFav();
  });


  // Doesn't work in Cordova :(
  // $scope.showPopup = function() {

  //   var myPopup = $ionicPopup.show({
  //     templateUrl: './../templates/sort.html',
  //     title: 'Choose how to sort',
  //     scope: $scope
  //   });
  //   $timeout(function() {
  //     myPopup.close(); //close the popup after 2.5 seconds
  //   }, 2500);
  //  };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

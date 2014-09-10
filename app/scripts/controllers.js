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
    $scope.data = {}

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: './../templates/sort.html',
      title: 'Choose how to sort',
      scope: $scope,
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
    $timeout(function() {
       myPopup.close(); //close the popup after 9 seconds for some reason
    }, 9000);
   };


})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'BoxStop'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Banjo'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Chicken'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'BoxStop'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Banjo'},
    {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Chicken'}
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

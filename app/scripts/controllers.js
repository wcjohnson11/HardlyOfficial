'use strict';
angular.module('HardStrict.controllers', [])

.controller('AppCtrl', function($scope, $ionicScrollDelegate, $ionicModal, $timeout) {
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

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  }
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

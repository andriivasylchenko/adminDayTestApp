angular.module('app.controllers', [])

.controller('testApplicationCtrl', function($scope, WLServices) {
  $scope.connected = false;
  $scope.connectError = false
  $scope.adapterCalled = false;
  $scope.adapterError = false;
  $scope.analyticsCalled = false;



  $scope.connectToServer = function() {
    WLServices.callWLconnect().then(function(result) {
      if (result = true) {
        $scope.connected = true;
        console.log('connected', $scope.connected);
        $scope.$safeApply();
      } else {
        $scope.connectError = true;
        console.log('connected', result);
        $scope.$safeApply();
      }
    })
  };

  $scope.callAdapter = function() {
    WLServices.callWLAdapter().then(function(result) {
      if (result.text = "We got adapter call") {
        $scope.adapterCalled = true;
        console.log('adapterCalled', $scope.adapterCalled);
        $scope.$safeApply();
      } else {
        $scope.adapterError = true;
        console.log('adapterCalled', $scope.adapterCalled);
        $scope.$safeApply();
      }
    })
  };

  $scope.logSampleText = function() {
    WL.Logger.warn("Hello from client-side");
    WL.Logger.send();
    console.log("--> logged sample text");
    $scope.analyticsCalled = true;
    $scope.$safeApply();
  }
})

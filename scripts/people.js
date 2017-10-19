var swInfo = angular.module('swInfo', []);
swInfo.controller('people', function($scope,$http) {
  $scope.regex = '^[a-zA-Z0-9._-]+$';
  $scope.searchPeople = function() {
    var searchurl = "https://swapi.co/api/people?search="+ angular.uppercase($scope.searchName);
    $http({
      method: 'GET',
      url: searchurl
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        alert(JSON.stringify(response.data.results));
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        alert(response.statusText);
      });
  }
});

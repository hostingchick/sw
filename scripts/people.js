var app = angular.module('swinfo', []);
app.controller('people', function($scope, $http) {
  $http({
    method : "GET",
    url : "https://swapi.co/api/people?search=" + $scope.searchname
  }).then(function mySuccess(response) {
      $scope.searchPeople = function () {
            $scope.searchText = response.data.results;
    }, function myError(response) {
      $scope.searchname = response.statusText;
  });
});

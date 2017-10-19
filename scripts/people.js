var app = angular.module('swinfo', []);

function people($scope) {
    $scope.searchname = null;
    $scope.searchPeople = function () {
      $http.get("https://swapi.co/api/people?search=" + $scope.searchname)
      .then(function(response) {
          alert($scope.searchText = response.data.results);
      });
    }
}

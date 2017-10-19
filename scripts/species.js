angular.module('species', [])
.controller('species', function($scope, $http) {
    $http.get('https://swapi.co/api/').
        then(function(response) {
            $scope.species = response.data;
        });
});

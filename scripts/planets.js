angular.module('planets', [])
.controller('planets', function($scope, $http) {
    $http.get('https://swapi.co/api/').
        then(function(response) {
            $scope.planets = response.data;
        });
});

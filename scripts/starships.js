angular.module('starships', [])
.controller('Starships', function($scope, $http) {
    $http.get('https://swapi.co/api/').
        then(function(response) {
            $scope.starships = response.data;
        });
});

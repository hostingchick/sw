angular.module('vehicles', [])
.controller('Vehicles', function($scope, $http) {
    $http.get('https://swapi.co/api/').
        then(function(response) {
            $scope.vehicles = response.data;
        });
});

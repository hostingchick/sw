angular.module('people', [])
.controller('people', function($scope, $http) {
    $http.get('https://swapi.co/api/').
        then(function(response) {
            $scope.people = response.data;
        });
});

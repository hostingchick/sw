var swInfo = angular.module('swInfo', []);
swInfo.controller('people', function($scope,$http) {
  $scope.searchPeople = function() {
    var searchurl = "https://swapi.co/api/people?search="+ $scope.searchName;
    $http({method: 'GET', url: searchurl}).
    success(function(data,status,headers,config){
      alert(JSON.stringify(data.results));
    }).
    error(function(data,status,headers,config){
      alert(status);
    });
  }
});

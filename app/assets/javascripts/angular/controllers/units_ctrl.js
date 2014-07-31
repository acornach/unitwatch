app.controller('UnitsCtrl', ['$scope', '$resource', function($scope, $resource) {
  var Units = $resource('/api/units');
  $scope.units = Units.query();
}]);
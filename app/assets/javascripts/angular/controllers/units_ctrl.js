app.controller('UnitsCtrl', ['$scope', 'Unit', function($scope, Unit) {
  $scope.units = Unit.all();
  
  $scope.deleteUnit = function(id,idx){
	$scope.units.splice(idx,1);
	return Unit.delete(id);
  };
}]);
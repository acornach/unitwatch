app.controller('UnitsCtrl', ['$scope', 'Unit', function($scope, Unit) {
  $scope.units = Unit.all();
  
  $scope.deleteUnit = function(id,idx){
	Unit.delete(id);
	$scope.units.splice(idx,1);
  };
  
  $scope.createUnit = function() {
	var attr = {};
	attr.symbol = $scope.newSymbol;
	var newUnit = Unit.create(attr);
	$scope.units.push(newUnit);
	$scope.newSymbol = "";
  };
}]);
app.controller('ChaptersCtrl', ['$scope', '$resource', function($scope,$resource) {
  //$scope.chapters = Chapter.all();
  //var chapters = {};
    
  $scope.init = function(id)
  {
    //This function is sort of private constructor for controller
    $scope.unitId = id; 
    //Based on passed argument you can make a call to resource
    //and initialize more objects
    //$resource.getMeBond(007)
	//console.log(id);
	
     $scope.chapters = $resource('/api/units/'+id+'/chapters/').query();
    //console.log($scope.chapters);
  };

  
  	
  
  $scope.deleteChapter = function(id,idx){
	Chapter.delete(id);
	$scope.chapters.splice(idx,1);
  };
  
  $scope.createChapter = function() {
	var attr = {};
	attr.symbol = $scope.newSymbol;
	var newChapter = Chapter.create(attr);
	$scope.chapters.push(newChapter);
	$scope.newSymbol = "";
  };
}]);
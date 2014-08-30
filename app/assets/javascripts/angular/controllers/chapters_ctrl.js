app.controller('ChaptersCtrl', ['$scope', '$resource', function($scope,$resource) {
  //$scope.chapters = Chapter.all();
  $scope.chapters = [];
  //var chapters;
  //$scope.chapters = [];
  $scope.init = function(id)
  {
    //This function is sort of private constructor for controller
    $scope.unitId = id; 
    //Based on passed argument you can make a call to resource
    //and initialize more objects
    //$resource.getMeBond(007)
	//console.log(id);
	
     $scope.chapters = $resource('/api/units/'+id+'/chapters/').query();

  };

   
 /* $scope.reOrderLeft = function() {
	var temp = $scope.chapters;
		$scope.chapters[0] = $scope.chapters[$scope.chapters.length-1];
		$scope.chapters[$scope.chapters.length-1] = temp;
		console.lot("reorderleft");
		console.log(temp);
  };*/
  
  $scope.addMoreItems = function()
  {
	var morechapters = $scope.chapters;
	$scope.chapters.push(morechapters);
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
app.controller('BulletsCtrl', ['$scope', '$resource',  function($scope,$resource) {
  //$scope.chapters = Chapter.all();
  //var chapters = {};
  $scope.bullets =[];
    
  $scope.init = function(id)
  {
    //This function is sort of private constructor for controller
    $scope.unitId = id; 
    //Based on passed argument you can make a call to resource
    //and initialize more objects
    //$resource.getMeBond(007)
	console.log(id);
	
     $scope.bullets = $resource('/api/chapters/'+id+'/bullets/').query();
    //console.log($scope.bullets);
	
	
	
  };

 
  
  $scope.deleteBullet = function(id,idx){
	Bullet.delete(id);
	$scope.bullets.splice(idx,1);
  };
  
  $scope.createBullet = function() {
	var attr = {};
	attr.symbol = $scope.newSymbol;
	var newBullet = Bullet.create(attr);
	$scope.bullets.push(newBullet);
	$scope.newSymbol = "";
  };
}]);
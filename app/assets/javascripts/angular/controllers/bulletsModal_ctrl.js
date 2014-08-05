
app.controller('BulletsModalCtrl', ['$scope', '$resource', '$modal', '$log',   function($scope,$resource,$modal,$log) {

  $scope.items = [];
  
  $scope.init = function(bullets)
  {
    //This function is sort of private constructor for controller
    //$scope.unitId = id; 
    //Based on passed argument you can make a call to resource
    //and initialize more objects
    //$resource.getMeBond(007)
	console.log(bullets);
	$scope.items = bullets;
     //$scope.bullets = $resource('/api/chapters/'+id+'/bullets/').query();
    //console.log($scope.bullets);
	
	
	
  };

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
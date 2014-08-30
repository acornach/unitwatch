app.controller('ToolTipCtrl', ['$scope','$element', function ($scope,$element) { 
    var tipTemplate = "<div ng-controller='BulletsCtrl' ng-init='init(chapter.id)'><div class='floatingOverDiv'><div class='bulletDiv' ng-repeat='bullet in bullets'><a href='http://www.uaf.edu/'>*{{bullet.bullet}}</a></div></div></div>";

	//console.log('$element');
	//add a qtip to each element
	$element.qtip({
		content: {
			text: $element.find('.floatingOverDiv')
		},
		hide: {
                fixed: true,
                delay: 300
            },
		show: {
             delay: 700
         },
		position: {
			 my: 'center left',
			 at: 'center right'
             /*target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }*/ 
         },
		 style: {
			tip: {
                corner: true,
                width: 10,
                height: 5
            },
            classes: 'qtip-rounded qtip-shadow qtip-tipped qtip-blue'
		 }
	});
	
	
	//$scope.$on('$viewContentLoaded', function() { 
		//Add qtips to element
		
	//});
	
	}]);


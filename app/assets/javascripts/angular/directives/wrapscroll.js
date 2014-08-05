/*app.directive('wrapScroll',function(){
	return {
		
		restrict: 'E', 
		templateUrl: '',
	
		//panels controller
		controller:function(){
		
		},
		controllerAs: 'scroller'
		
		
	
	};
	

});*/

app.controller('SliderCtrl',['$scope','$element',function($scope, $element){
	//console.log($element);
}]);

app.controller('RightCtrl',['$scope','$element',function($scope,$element){
//console.log($element.$parent);
	var test = angular.element($scope.$parent);
	console.log(test);
	

	setInterval(function() {
		if($element.is(":hover"))
		{
			var left = parseInt($element.parent().find('.track').css('left'));
			console.log($element.parent().find('.track').css('left', left - 2));
			console.log("hovering");
		}
	});
	
}]);

app.controller('LeftCtrl',['$scope','$element',function($scope,$element){
	//console.log($element.$parent);
	var test = angular.element($scope.$parent);
	console.log(test);
	

	setInterval(function() {
		if($element.is(":hover"))
		{
			var left = parseInt($element.parent().find('.track').css('left'));
			console.log($element.parent().find('.track').css('left', left + 2));
			console.log("hovering");
		}
	});
	/*
	checkWrap(function(){
	
		//if too far left:
			//move far left div to right side
		//if too far right:
			//move far right div to left
	});*/
	
}]);

//<wrap-scroll>, might want to switch to an atrribute

/**
setInterval(function() {

//TODO: This might be where infinite tracking is implemented, or an angular directive

    var left1 = parseInt($('#track1').css('left')),
        left2 = parseInt($('#track2').css('left')),
        left3 = parseInt($('#track3').css('left'));
		left4 = parseInt($('#track4').css('left'));
    
    if ($('#left1').is(":hover")) {
        $('#track1').css('left', left1+4);
    }
    else if ($('#left2').is(":hover")) {
        $('#track2').css('left', left2+4);
    }
    else if ($('#left3').is(":hover")) {
        $('#track3').css('left', left3+4);
    }
	else if ($('#left4').is(":hover")) {
        $('#track4').css('left', left4+4);
    }
    else if ($('#right1').is(":hover")) {
        $('#track1').css('left', left1-4);
    }
    else if ($('#right2').is(":hover")) {
        $('#track2').css('left', left2-4);
    }
    else if ($('#right3').is(":hover")) {
        $('#track3').css('left', left3-4);
    }
	else if ($('#right4').is(":hover")) {
        $('#track4').css('left', left4-4);
    }
}, 10);
*/
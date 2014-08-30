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

app.controller('SliderCtrl',['$scope','$element', '$timeout',function($scope, $element,$timeout){
	
	$timeout(function() {
	$element.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
		})
	});
	
	//console.log($element);
	//console.log($element.find('li:first').before($element.find('li:last')));
	
}]);


//Left and Right Controllers will move the track div left and right on hover
app.controller('RightCtrl',['$scope','$element',function($scope,$element){
//console.log($element.$parent);
	var test = angular.element($scope.$parent);
	//console.log(test);
	
	setInterval(function() {
		if($element.is(":hover"))
		{
			var left = parseInt($element.parent().find('.track').css('left'));
			$element.parent().find('.track').css('left', left - 2);
			//console.log("hovering");
		}
	});
}]);

app.controller('LeftCtrl',['$scope','$element',function($scope,$element){
	//console.log($element.$parent);
	var test = angular.element($scope.$parent);
	//console.log(test);
	
	setInterval(function() {
		if($element.is(":hover"))
		{
			var left = parseInt($element.parent().find('.track').css('left'));
			$element.parent().find('.track').css('left', left + 2);
			//console.log("hovering");
		}
	});
}]);

app.controller('WrapControl',['$scope','$element',function($scope,$element){

  


}]);

app.directive('chapterRepeat',function(){
	return {
	
		restrict: 'E',
		templateUrl: 'helperdiv.html'
	
	};

});

app.controller('PositionCtrl', ['$scope','$element',function($scope,$element){

	var divs = $element.find('.books');
	console.log(divs.offset());


}]);




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
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
	//var test = angular.element($scope.$parent);
	//shiftLeft(function(){
	/*	if($element.find('.track')){
			var leftShift = parseInt($element.find('.track').width());
			console.log(leftShift);
			
			$element.find('.track').css('left',leftShift/3);
			}*/
	//});
}]);


//Left and Right Controllers will move the track div left and right on hover
app.controller('RightCtrl',['$scope','$element',function($scope,$element){
//console.log($element.$parent);
	var test = angular.element($scope.$parent);
	var rightDiv,leftDiv;
	var initialTrackPos = parseInt($element.parent().find('.track').css('left'));
	
	setInterval(function() {
		if($element.is(":hover"))
		{
		//var divs = $element.parent().find('.track').find('.books');
			//var trackID = parseInt($element.parent().find('.track').attr('id'));
			
			var trackID = $element.parent().find('.track').attr('id');
			//console.log(trackID);
			//var array = $.map(divs,function(value,index) { return[value];});
			divs = $('#'+trackID).find('.books');
			
			rightDiv = divs.last();
			leftDiv = divs.first();
			var left = parseInt($element.parent().find('.track').css('left'));
			$element.parent().find('.track').css('left', left - 2);
			//console.log("hovering");
			if(initialTrackPos-200>left)
			{
				leftDiv.insertBefore(rightDiv);
				$element.parent().find('.track').css('left', left + 200);
			}
		}
	});
}]);

app.controller('LeftCtrl',['$scope','$element',function($scope,$element){
	//console.log($element.$parent);
	var test = angular.element($scope.$parent);
	var rightDiv,leftDiv;
	var initialTrackPos = parseInt($element.parent().find('.track').css('left'));
	//console.log(initialTrackPos);
	//console.log(rightDiv);
	setInterval(function() {
		if($element.is(":hover"))
		{
			
			//var divs = $element.parent().find('.track').find('.books');
			//var trackID = parseInt($element.parent().find('.track').attr('id'));
			
			var trackID = $element.parent().find('.track').attr('id');
			//console.log(trackID);
			//var array = $.map(divs,function(value,index) { return[value];});
			divs = $('#'+trackID).find('.books');
			
			rightDiv = divs.last();
			leftDiv = divs.first();
			var left = parseInt($element.parent().find('.track').css('left'));
			
			$element.parent().find('.track').css('left', left + 2);
			if(initialTrackPos<left)
			{
				rightDiv.insertBefore(leftDiv);
				$element.parent().find('.track').css('left', left - 200);
			}//leftDiv.insertAfter(rightDiv);
			//console.log(leftDiv.position());
			//leftDiv.insertAfter(rightDiv);//({"float":"left"});
			
			
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



//<wrap-scroll>, might want to switch to an atrribute
$( document ).ready(function() {
	for(i=1;i<5;i++){
		var leftShift = parseInt($('#track'+i).find('.repeatedBlockOfChapters').width()) / 2000;
		var currentLeft = parseInt($('#track'+i).css('left'));
		//console.log('#track'+i + '  ' +leftShift);
		//console.log('#track'+i + '  ' +currentLeft);
					
		//$('#track1').css('left',currentLeft - leftShift/3);
	}
});
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
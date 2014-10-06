
app.controller('SliderCtrl',['$scope','$element',function($scope, $element){

}]);


//TODO: Hide if width is less than screen width
app.controller('RightCtrl',['$scope','$element',function($scope,$element){

	var test = angular.element($scope.$parent);
	var rightDiv,leftDiv;
	var initialTrackPos = parseInt($element.parent().find('.track').css('left'));
	
	setInterval(function() {
		if($element.is(":hover"))
		{

			var trackID = $element.parent().find('.track').attr('id');

			//Get divs from complete jquery library to access insert functions
			divs = $('#'+trackID).find('.books');
			
			
			divs = $('#'+trackID).find('.books');
			wid = $(window).width();
			len = $('#'+trackID).width();
			console.log(len)
			if(len<wid-150){
				//center them or align left
				$element.parent().find('.track').css('left', 10);
			return;
			}
			
			
			rightDiv = divs.last();
			leftDiv = divs.first();
			var left = parseInt($element.parent().find('.track').css('left'));
			$element.parent().find('.track').css('left', left - 2);

			if(initialTrackPos-200>left)
			{
				leftDiv.insertAfter(rightDiv);
				$element.parent().find('.track').css('left', left + 200);
			}
		}
	});
}]);


//TODO: Hide if width is less than screen width
app.controller('LeftCtrl',['$scope','$element',function($scope,$element){
	var test = angular.element($scope.$parent);
	var rightDiv,leftDiv;
	var initialTrackPos = parseInt($element.parent().find('.track').css('left'));

	wid = $(window).width();
	len = $('.track').first().offsetWidth;
	//console.log(wid);
	//console.log(len);
	
	
	setInterval(function() {
		if($element.is(":hover"))
		{
		
			var trackID = $element.parent().find('.track').attr('id');
			
			//Get divs from complete jquery library to access insert functions
			divs = $('#'+trackID).find('.books');
			wid = $(window).width();
			len = $('#'+trackID).width();
			console.log(len)
			if(len<wid-150){
				//center them or align left
				$element.parent().find('.track').css('left', 10);
			return;
			}
			
			
			
			
			rightDiv = divs.last();
			leftDiv = divs.first();
			var left = parseInt($element.parent().find('.track').css('left'));
			
			$element.parent().find('.track').css('left', left + 2);
			if(initialTrackPos<left)
			{
				rightDiv.insertBefore(leftDiv);
				$element.parent().find('.track').css('left', left - 200);
			}
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
	//console.log(divs.offset());


}]);




$( document ).ready(function() {
	for(i=1;i<5;i++){
		var leftShift = parseInt($('#track'+i).find('.repeatedBlockOfChapters').width()) / 2000;
		var currentLeft = parseInt($('#track'+i).css('left'));

	}
});

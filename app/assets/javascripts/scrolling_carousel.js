setInterval(function() {
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


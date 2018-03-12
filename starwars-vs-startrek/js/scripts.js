// Loader Gif
window.onload = (function() {
	$('#loader').delay(800).slideUp(500);
});

// Hide intro on button click
$('#exit_intro').click(function(){
	$('#intro').fadeOut();
});

// Open results on button click
$('#open_results').click(function(){
	$('#results').fadeIn();
});

$('#slides').superslides({
	slide_easing: 'easeInOutCubic',
	slide_speed: 400,
	pagination: false,
	hashchange: false,
	scrollable: true
});

// Slider events
$(document).on('animated.slides', function() {
  
	numberofslides = $('#slides').superslides('size');
	currentslide = $('#slides').superslides('current');
	
	if (currentslide === 4) { // first slide
	// do logic here if required
	} 
	if (currentslide === numberofslides-1) { // last slide
		$('.slides-navigation a.next').hide();
		$('#open_results').show();
	}
});

// Random pos of elements
$('.randompos').each(function() {
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        divWidth = $(this).width(),
        divHeight = $(this).height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;

    $(this).css({
        left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax )
    });
});

// Set initial values on progressbars 
$(function() {
	$('#trekbar').progressbar({
		value: 0
	});
});

$(function() {
	$('#warsbar').progressbar({
		value: 0
	});
});

// Radio button change events & score calculations
$('input:radio').change(function(){
	
	var sameName = $(this).attr('name');
	
	$('input:radio[name=' + sameName + ']').attr('disabled', 'disabled');
	
	var trekScore = $('input:radio.trek:checked').length*16.677777;
	var warsScore = $('input:radio.wars:checked').length*16.677777;
	
	// progress bar calculations and result show
	
	$(function() {
		$('#trekbar').progressbar({
		  value: trekScore - warsScore
		});
	});
	
	$(function() {
		$('#warsbar').progressbar({
		  value: warsScore - trekScore
		});
	});
	
	function starWarsWin() {
		$('.trek_result').hide();
		$('.wars_result').show();
		$('.tie_result').hide();
		$('#spectrum').removeClass().addClass('warsbg');
	};
	
	function starTrekWin() {
		$('.trek_result').show();
		$('.wars_result').hide();
		$('.tie_result').hide();
		$('#spectrum').removeClass().addClass('trekbg');
	};
	
	function tie() {
		$('.trek_result').hide();
		$('.wars_result').hide();
		$('.tie_result').show();
		$('#spectrum').removeClass().addClass('tiebg');
	};
	
	if ( trekScore > warsScore ) {	
		starTrekWin();
	} 
	
	else if ( warsScore > trekScore ) {  
		starWarsWin();
	}
	
	else if ( warsScore == trekScore ) {  
		tie();
	};

	// answer key show	
	var correctLi = $(this).index() / 2;
	$(this).siblings('.key').fadeIn().children('ul').children('li:nth-child(' + correctLi + ')').fadeIn();
	
});

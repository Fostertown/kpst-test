// LOGO HOVER ANIMATION
if ($(window).width() > 520) {
	$('a.logo').hover( 
	    function() {
	        $('#kapost_logo').animate({width:'250px'}, 200);
	        },
	    function() {
	        $('#kapost_logo').animate({width:'62px'}, 500);
	});
}
else {
//disable hover effect, breaks header if active
	$('a.logo').hover();
};


// BASED ON IMG ALT WE ADD A TITLE TO EACH GALLERY TILE
$('#gallery li img').each(function() {
    $('<div />', {
        'class': 'hover', 
        'text': $(this).attr('alt')
    }).prependTo($(this).parent()); //.prepend('<a href="#" class="btn">Read More</a>');
});

// ADD RANKING # BASED ON LI POSITION
$('#gallery').each(function() {
	$('li', this).prepend(function(i) {
		return $('<div />', {text: i+ 1}).addClass('number').prepend('<span class="hash">#</span>');
	});
});

// random classes to paper_effects on click
function changePaperEffect() {
	var classes = ['effect1','effect2', 'effect3']; 
	var randomnumber = Math.floor(Math.random()*classes.length);
	
	$('#paper_effects').removeClass().addClass(classes[randomnumber]);
}

changePaperEffect();


// ON TILE CLICK EVENTS
$('#gallery li').click(function() {
	
	changePaperEffect();

	$('.hidden_paper').slideDown();
	$('#paper_effects').fadeIn();
	$('.main_paper').animate({ marginTop: 0 });
	$('ul#more_info li').hide();

    var clickedImgSrc = $(this).children('img').attr('src');
        
    $('#more_info_image').fadeIn().attr('src', clickedImgSrc);

	var hashDef = $(this).children('img').attr('alt');
	var hashClean = hashDef.replace(/\s/g, '');

	window.location.hash = hashClean;
	
	var currentLiNumber = $(this).index();
	$('ul#more_info li').eq(currentLiNumber).fadeIn();

	$("html, body").animate({ scrollTop: $('#hidden_paper_anchor').offset().top }, 500);    

});

// CLOSE ADDITIONAL INFO PAPER
$('.close').click(function() {
	$('#paper_effects').fadeOut(150);
	$('.hidden_paper').slideUp();
	$('ul#more_info li, #more_info_image').fadeOut();
	$('.main_paper').animate({ marginTop: -54 });
	window.location.hash = "#close";
	history.pushState('', document.title, window.location.pathname);
});

$('#more_info li').each(function(index, value) { 
	$(this).children('h2').prepend('<span class="hash">#</span>' + (index + 1) + ' ');
});

// check if hash tag exists in the URL
if(window.location.hash) {
// update hash to add spaces back in and remove #
	var currentHash = window.location.hash.substring(1);
	var currentHashNew = currentHash.replace(/([a-z])([A-Z])/g, '$1 $2');
	
	$('#gallery li img').each(function() {
		if ( $(this).attr('alt') == currentHashNew ) {
				$(this).click();
		}
	});
}

// gallery hover effect
$('#gallery li img').addClass('grayscale');

$('#gallery li').hover(function() {
	$(this).children('img').toggleClass('disabled');
});

// twitter script
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
	
// update tweet this url
function updateTweetUrl() {

	var currentCo = window.location.hash.substring(1);
	var currentCoNew = currentCo.replace(/([a-z])([A-Z])/g, '$1 $2');
	
	$('#tweet_this').empty();
	$('#tweet_this').append('<a href="https://twitter.com/share" class="twitter-share-button" data-text="' + currentCoNew + ' made Kapost&rsquo;s top 50 content marketing brands. See the other 49" data-url="' + window.location +'" data-hashtags="kapost50" data-count="none" data-lang="en">Tweet</a>');
	
	$('#more_info_image').attr('alt', currentCoNew);
	
}

$('#gallery li').click(function() {
	updateTweetUrl();
	twttr.widgets.load();
});

$(window).load(function() {
	updateTweetUrl();
	twttr.widgets.load();
});

// mobile nav
$('h2#mobile_share').click(function() {
	$('#share_list').slideToggle();
});

// if window is 768 or less
if ($(window).width() < 769) {
	$('#share_list').prependTo('section.opener');
/* 	$('#loader').hide(); */
}
else {
	$('#share_list').appendTo('header .share_btns');

	// PAGE PROGRESS LOADER
/*
	$('#loader').show();
	window.onload = (function() {
		$('#loader').fadeOut();
	});
*/
}

$(window).resize(function() {
  if ($(window).width() < 769) {
	$('#share_list').prependTo('section.opener');
	$('#share_list').hide();
}
else{
	$('#share_list').show().appendTo('header .share_btns');
}
});


// remove pin btn from gallery
$('.main_paper img').attr('nopin', 'nopin');





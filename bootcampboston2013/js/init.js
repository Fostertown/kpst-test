$(document).ready(function() {
		
	// submit forms with links
	$("a.submit").click(function(){	
		$(this).closest("form").submit();
		return false;	
	});
	$('form input').keypress(function(e){
		var c = e.which ? e.which : e.keyCode;
		if(c == 13){
		    $(this).closest('form').submit();
		} 
	});

	
	// Smooth scrolling
	$('.scroll').localScroll({ 
   		target: $(window), 
  		axis: 'y',
   		duration: 600
	});	
	$('.top').localScroll({ 
   		target: $(window), 
  		axis: 'y',
   		duration: 600
	});	

	
	/*
		Fancybox -- Standard Text
	*/

	$(".popUp").fancybox({
		openEffect : 'elastic',
		openSpeed  : 150,
		closeEffect : 'elastic',
		closeSpeed  : 150,
		maxWidth	: 800,
		maxHeight	: 700,
		fitToView	: false,
		autoSize	: true,
		width		: '33%',
		height		: '66%',
		closeClick	: true,
		type		: 'inline',
		scrolling	: 'no'

	});
	
	
	/*
		Fancybox -- Photos and Videos
	*/

	$('.fancybox').fancybox({
			openEffect : 'elastic',
			openSpeed  : 150,
			closeEffect : 'elastic',
			closeSpeed  : 150,
			width		: 640,
			height		: 480,
			prevEffect : 'fade',
			nextEffect : 'fade'
	});
	

});


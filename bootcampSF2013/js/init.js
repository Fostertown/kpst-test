$(document).ready(function() {
	
	
	// clear search default text on focus
	$(".clearDefault").focus(function() {
		if( this.value == this.defaultValue ) {
			this.value = "";
		}
	}).blur(function() {
		if( !this.value.length ) {
			this.value = this.defaultValue;
		}
	});
	
	
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
	
	// Validate Forms	
	$("#form37").validate({
		rules: {
			firstName: "required",
			lastName: "required",
			businessPhone: {
				required: true,
				minlength: 10
			},
			company: "required",
			companyRevenue: "required",
			title: "required",
			emailAddress: {
				required: true,
				email: true
			}
		},
		messages: {
			firstName: "Please enter your first name",
			lastName: "Please enter your last name",
			businessPhone: "10 digit phone number required",
			company: "Company name required",
			companyRevenue: "Company Revenue is required",
			title: "Title is required",
			emailAddress: "Invalid email address"
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


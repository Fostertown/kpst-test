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


// remove pin btn from gallery
$('.main_paper img').attr('nopin', 'nopin');



// social sharing
$('.facebook-share').click(function() {
			FB.ui({
			  method: 'share',
			  href: window.location.href,
			}, function(response){});			
		})
		
		$('.twitter-share').click(function(event) {
			var width  = 575,
			    height = 400,
			    left   = ($(window).width()  - width)  / 2,
			    top    = ($(window).height() - height) / 2,
			    url    = "http://twitter.com/share?hashtags=Kapost&text=" + escape($(this).data('text')) + " -->&url=" + escape(window.location.href),
			    opts   = 'status=1' +
			             ',width='  + width  +
			             ',height=' + height +
			             ',top='    + top    +
			             ',left='   + left;
			
			window.open(url, 'twitter', opts);
			
			return false;
		});
		
		$('.linkedin-share').click(function(event) {
			var width  = 575,
			    height = 400,
			    left   = ($(window).width()  - width)  / 2,
			    top    = ($(window).height() - height) / 2,
			    url    = "http://www.linkedin.com/shareArticle?mini=true&url=" + escape(window.location.href) + "&summary=" + escape($(this).data('text')),
			    opts   = 'status=1' +
			             ',width='  + width  +
			             ',height=' + height +
			             ',top='    + top    +
			             ',left='   + left;
			
			window.open(url, 'linkedin', opts);
			
			return false;
		});
		
		$('.pinterest-share').click(function(event) {
			var image  = $(this).parent().parent().find('img.logo-right').attr('src')
		
			var width  = 575,
			    height = 400,
			    left   = ($(window).width()  - width)  / 2,
			    top    = ($(window).height() - height) / 2,
			    url    = "http://www.pinterest.com/pin/create/button/?url=" + escape(window.location.href) + "&description=" + escape($(this).data('text')) + (image?"&media=http://kapost.nikru.com/history-of-digital-marketing-technology/" + image:""),
			    opts   = 'status=1' +
			             ',width='  + width  +
			             ',height=' + height +
			             ',top='    + top    +
			             ',left='   + left;
			
			window.open(url, 'linkedin', opts);
			
			return false;
		});
		
		$('.google-share').click(function(event) {
			var width  = 575,
			    height = 400,
			    left   = ($(window).width()  - width)  / 2,
			    top    = ($(window).height() - height) / 2,
			    url    = "https://plus.google.com/share?url=" + escape(window.location.href) + "&description=" + escape($(this).data('text')),
			    opts   = 'status=1' +
			             ',width='  + width  +
			             ',height=' + height +
			             ',top='    + top    +
			             ',left='   + left;
			
			window.open(url, 'linkedin', opts);
			
			return false;
		});





var $ = jQuery;
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
			    url    = "http://twitter.com/share?hashtags=Kapost50&text=" + escape($(this).data('text')) + " -->&url=" + escape(window.location.href),
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
			var image  = $(this).parents('.modal-content').find('img.modal-logo').attr('src');
			console.log(image);
		
			var width  = 575,
			    height = 400,
			    left   = ($(window).width()  - width)  / 2,
			    top    = ($(window).height() - height) / 2,
			    url    = "http://www.pinterest.com/pin/create/button/?url=" + escape(window.location.href) + ("&media=http://kapost.com/kapost-50-b2b-marketing/" + escape(image)) + "&description=" + escape($(this).data('text')),
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







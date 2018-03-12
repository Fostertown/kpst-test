window.onload = (function() {
	setTimeout(function() {
        $(document.body).scrollTop(0);
    }, 15);
	$('.opener h1').css({ opacity: 0 });
	$('#loader').delay(100).fadeOut(function() {
		$('.opener h1').animo( { animation: 'bounceInDown', duration: 1 } ).css({ opacity: 1 });
	});
	
	// facebook
	(function(d, s, id) {
					  var js, fjs = d.getElementsByTagName(s)[0];
					  if (d.getElementById(id)) return;
					  js = d.createElement(s); js.id = id;
					  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=222046127934872";
					  fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));
	// g+				
	      window.___gcfg = {
	    lang: 'en-US'
	  };
	  (function() {
	    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	    po.src = 'https://apis.google.com/js/plusone.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	  })();
	  
	 // twitter
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

});

$(function(){
  $('#runner_one').spritespin({
    width     : 170,  // window width
    height    : 320,  // window height
    frames    : 19,   // number of frames to show (soruce strings in array)
    behavior  : "none",
    animate   : false,
    loop      : true,
    source    : [
	  "images/run_cycle/1/00000.png",
      "images/run_cycle/1/00001.png",
      "images/run_cycle/1/00002.png",
      "images/run_cycle/1/00003.png",
      "images/run_cycle/1/00004.png",
      "images/run_cycle/1/00005.png",
      "images/run_cycle/1/00006.png",
      "images/run_cycle/1/00007.png",
      "images/run_cycle/1/00008.png",
      "images/run_cycle/1/00009.png",
      "images/run_cycle/1/00010.png",
      "images/run_cycle/1/00011.png",
      "images/run_cycle/1/00012.png",
      "images/run_cycle/1/00013.png",
      "images/run_cycle/1/00014.png",
      "images/run_cycle/1/00015.png",
      "images/run_cycle/1/00016.png",
      "images/run_cycle/1/00017.png",
      "images/run_cycle/1/00018.png",
      "images/run_cycle/1/00019.png",
    ]
  });

  $('#runner_two').spritespin({
    width     : 170,  // window width
    height    : 320,  // window height
    frames    : 19,   // number of frames to show (soruce strings in array)
    behavior  : "none",
    animate   : false,
    loop      : true,
    source    : [
	  "images/run_cycle/2/00000.png",
      "images/run_cycle/2/00001.png",
      "images/run_cycle/2/00002.png",
      "images/run_cycle/2/00003.png",
      "images/run_cycle/2/00004.png",
      "images/run_cycle/2/00005.png",
      "images/run_cycle/2/00006.png",
      "images/run_cycle/2/00007.png",
      "images/run_cycle/2/00008.png",
      "images/run_cycle/2/00009.png",
      "images/run_cycle/2/00010.png",
      "images/run_cycle/2/00011.png",
      "images/run_cycle/2/00012.png",
      "images/run_cycle/2/00013.png",
      "images/run_cycle/2/00014.png",
      "images/run_cycle/2/00015.png",
      "images/run_cycle/2/00016.png",
      "images/run_cycle/2/00017.png",
      "images/run_cycle/2/00018.png",
      "images/run_cycle/2/00019.png",
    ]
  });

  $('#runner_three').spritespin({
    width     : 170,  // window width
    height    : 320,  // window height
    frames    : 19,   // number of frames to show (soruce strings in array)
    behavior  : "none",
    animate   : false,
    loop      : true,
    source    : [
	  "images/run_cycle/3/00000.png",
      "images/run_cycle/3/00001.png",
      "images/run_cycle/3/00002.png",
      "images/run_cycle/3/00003.png",
      "images/run_cycle/3/00004.png",
      "images/run_cycle/3/00005.png",
      "images/run_cycle/3/00006.png",
      "images/run_cycle/3/00007.png",
      "images/run_cycle/3/00008.png",
      "images/run_cycle/3/00009.png",
      "images/run_cycle/3/00010.png",
      "images/run_cycle/3/00011.png",
      "images/run_cycle/3/00012.png",
      "images/run_cycle/3/00013.png",
      "images/run_cycle/3/00014.png",
      "images/run_cycle/3/00015.png",
      "images/run_cycle/3/00016.png",
      "images/run_cycle/3/00017.png",
      "images/run_cycle/3/00018.png",
      "images/run_cycle/3/00019.png",
    ]
  });

});


(function($) {
  function debounce(callback, delay) {
    var self = this, timeout, _arguments;
    return function() {
      _arguments = Array.prototype.slice.call(arguments, 0),
      timeout = clearTimeout(timeout, _arguments),
      timeout = setTimeout(function() {
        callback.apply(self, _arguments);
        timeout = 0;
      }, delay);

      return this;
    };
  }

  $.extend($.fn, {
    debounce: function(event, callback, delay) {
      this.bind(event, debounce.apply(this, [callback, delay]));
    }
  });
})(jQuery);


$(window).scroll($.debounce( 250, function(){
     $('#runner_one, #runner_two, #runner_three').spritespin('animate', false);
} ) );


$('#runner_one').css({ position: 'absolute', top: '700px', marginTop: 0 }).waypoint(function(direction) {
  if (direction === 'down') {
	  $(this).css({ position: 'fixed', top: '30%', marginTop: 0 }).addClass('scrolling');
	  $(window).scroll($.debounce( 250, true, function(){
	     $('#runner_one').spritespin('animate', true);
	  } ) );
  }
}, {
  offset: '30%'
}).waypoint(function(direction) {
  if (direction === 'up') {
	$(this).css({ position: 'absolute', top: '700px', marginTop: 0 }).removeClass('scrolling');
     $('#runner_one').spritespin('animate', false);
  }
}, {
  offset: '30%'
});

$('#runner_two').css({ position: 'absolute', top: '900px', marginTop: 0 }).waypoint(function(direction) {
  if (direction === 'down') {
	  $(this).css({ position: 'fixed', top: '30%', marginTop: 0 }).addClass('scrolling');
	  $(window).scroll($.debounce( 250, true, function(){
	     $('#runner_two').spritespin('animate', true);
	  } ) );
  }
}, {
  offset: '30%'
}).waypoint(function(direction) {
  if (direction === 'up') {
	$(this).css({ position: 'absolute', top: '900px', marginTop: 0 }).removeClass('scrolling');
     $('#runner_two').spritespin('animate', false);
  }
}, {
  offset: '30%'
});

$('#runner_three').css({ position: 'absolute', top: '1100px', marginTop: 0 }).waypoint(function(direction) {
  if (direction === 'down') {
	  $(this).css({ position: 'fixed', top: '30%', marginTop: 0 }).addClass('scrolling');
	  $(window).scroll($.debounce( 250, true, function(){
	     $('#runner_three').spritespin('animate', true);
	  } ) );
  }
}, {
  offset: '30%'
}).waypoint(function(direction) {
  if (direction === 'up') {
	$(this).css({ position: 'absolute', top: '1100px', marginTop: 0 }).removeClass('scrolling');
     $('#runner_three').spritespin('animate', false);
  }
}, {
  offset: '30%'
});


$('.lane.first .content li, .lane.third .content li, .lane.fifth .content li').waypoint(function(direction) {
	  if (direction === 'down') {
		$(this).animate({ opacity: .2 }, 200);
	  }
	}, {
  offset: '30%'
	}).waypoint(function(direction) {
	  if (direction === 'up') {
		$(this).animate({ opacity: 1 }, 200);
	  }
	}, {
  offset: '30%'
});


$('.flyout.profile.glow').waypoint(function(direction) {
  if (direction === 'down') {
		$(this).animo( { animation: 'bounceInDown', duration: 1 } ).css({ opacity: 1 });
  }
}, {
  offset: '90%'
}).waypoint(function(direction) {
  if (direction === 'up') {
	  $(this).animate({ opacity: 0 });
  }
}, {
  offset: '75%'
});

$('.flyout.arrow_left').waypoint(function(direction) {
  if (direction === 'down') {
		$(this).animo( { animation: 'bounceInLeft', duration: 1 } ).css({ opacity: 1 });
  }
}, {
  offset: '100%'
}).waypoint(function(direction) {
  if (direction === 'up') {
	  $(this).animate({ opacity: 0 });
  }
}, {
  offset: '75%'
});

$('.flyout.arrow_right').waypoint(function(direction) {
  if (direction === 'down') {
		$(this).animo( { animation: 'bounceInRight', duration: 1 } ).css({ opacity: 1 });
  }
}, {
  offset: '100%'
}).waypoint(function(direction) {
  if (direction === 'up') {
	  $(this).animate({ opacity: 0 });
  }
}, {
  offset: '75%'
});

$('.flyout.full').waypoint(function(direction) {
  if (direction === 'down') {
		$(this).animo( { animation: 'bounceInDown', duration: 1 } ).css({ opacity: 1 });
  }
}, {
  offset: '100%'
}).waypoint(function(direction) {
  if (direction === 'up') {
	  $(this).animate({ opacity: 0 });
  }
}, {
  offset: '75%'
});


$('ul.runners').css({opacity: 0}).waypoint(function(direction) {
  if (direction === 'down') {
		$(this).animo( { animation: 'bounceIn', duration: 1 } ).css({ opacity: 1 });
		$('#runner_one, #runner_two, #runner_three').fadeOut(200);
  }
}, {
  offset: '80%'
}).waypoint(function(direction) {
  if (direction === 'up') {
	  $(this).animate({ opacity: 0 });
	  $('#runner_one, #runner_two, #runner_three').fadeIn(200);
  }
}, {
  offset: '75%'
});


$('#graph_bars span.award').css({opacity: 0}).waypoint(function(direction) {
  if (direction === 'down') {
		$(this).animo( { animation: 'bounceIn', duration: 1 } ).css({ opacity: 1 });
  }
}, {
  offset: '100%'
}).waypoint(function(direction) {
  if (direction === 'up') {
	  $(this).animate({ opacity: 0 });
  }
}, {
  offset: '75%'
});



$('#cta .button').waypoint(function(direction) {
  if (direction === 'down') {
		$(this).animo( { animation: 'bounce', duration: 1 } );
  }
}, {
  offset: '100%'
});


$('ul.runners li').click(function () {
	
	var runnerClass = $(this).attr('class');
	
	if ( $(this).hasClass('highlight') ) {
	}
	else {
		$('#journey_breakdown ul li').not('#journey_breakdown ul.runners li, #journey_breakdown ul.journey ul li').hide();
		$('#journey_breakdown ul li.' + runnerClass).fadeIn(200);
		
		$('#journey_breakdown ul.runners li').removeClass('highlight');
		$(this).addClass('highlight');
	};
});

$('ul.runners li:first-child').click(function () {
	$('ul.info.block').removeClass('center right').addClass('left');
});

$('ul.runners li:nth-child(2)').click(function () {
	$('ul.info.block').removeClass('left right').addClass('center');
});

$('ul.runners li:nth-child(3)').click(function () {
	$('ul.info.block').removeClass('center left').addClass('right');
});


$('.lane .content li, #content_pieces li, #graph_bars li, .journey ul li').addClass('masterTooltip');

$(document).ready(function() {
	// Tooltip only Text
	$('.masterTooltip').hover(function(){
	        // Hover over code
	        var title = $(this).attr('title');
	        $(this).data('tipText', title).removeAttr('title');
	        $('<p class="tooltip"></p>')
	        .text(title)
	        .appendTo('body')
	        .fadeIn('slow');
	}, function() {
	        // Hover out code
	        $(this).attr('title', $(this).data('tipText'));
	        $('.tooltip').remove();
	}).mousemove(function(e) {
	        var mousex = e.pageX + 20; //Get X coordinates
	        var mousey = e.pageY + 10; //Get Y coordinates
	        $('.tooltip')
	        .css({ top: mousey, left: mousex })
	});
});

$(function() {
/*
 var windowHeight = $( window ).height();
 var windowHeightAdj = windowHeight/2;
*/
 
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top/*  - windowHeightAdj */
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('#nav').addClass('fixed');
        $('#anchors span').each(function(i) {
            if ($(this).position().top <= windscroll + 400) {
                $('#nav a.active').removeClass('active');
                $('#nav a').eq(i).addClass('active');
            }
        });

    } else {

        $('#nav').removeClass('fixed');
        $('#nav a.active').removeClass('active');
        $('#nav a:first').addClass('active');
    }

}).scroll();

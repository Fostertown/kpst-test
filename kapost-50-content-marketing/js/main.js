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
$('#number button').each(function() {
    $('img', {
        'class': 'hover', 
        'text': $(this).attr('alt')
    }).prependTo($(this).parent()); //.prepend('<a href="#" class="btn">Read More</a>');
});

// ADD RANKING # BASED ON LI POSITION
$('#number').each(function() {
	$('button', this).prepend(function(i) {
		return $('img', {text: i+ 1}).addClass('number').prepend('<span class="hash">#</span>');
	});
});

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
			var image  = $(this).parent().parent().find('img.logo-right').attr('src')
		
			var width  = 575,
			    height = 400,
			    left   = ($(window).width()  - width)  / 2,
			    top    = ($(window).height() - height) / 2,
			    url    = "http://www.pinterest.com/pin/create/button/?url=" + escape(window.location.href) + "&description=" + escape($(this).data('text')) + (image?"&media=http://kapost.nikru.com/kapost-50-content-marketing/" + image:""),
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




// logo hover sprites 01
  $('.docusign').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/docusign_white.png');
});
$('.docusign').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/docusign.png');
});

// 02
  $('.linkedin').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/linkedin_white.png');
});
$('.linkedin').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/linkedin.png');
});

// 03
  $('.ibm').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/ibm_white.png');
});
$('.ibm').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/ibm.png');
});

// 04
  $('.xerox').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/xerox_white.png');
});
$('.xerox').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/xerox.png');
});

// 05
  $('.hubspot').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/hubspot_white.png');
});
$('.hubspot').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/hubspot.png');
});

// 06
  $('.tableau').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/tableau_white.png');
});
$('.tableau').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/tableau.png');
});

// 07
  $('.redbull').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/redbull_white.png');
});
$('.redbull').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/redbull.png');
});

// 08
  $('.sunlifefinancial').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/sunlifefinancial_white.png');
});
$('.sunlifefinancial').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/sunlifefinancial.png');
});

// 09
  $('.amway').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/amway_white.png');
});
$('.amway').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/amway.png');
});

// 10
  $('.americanexpress').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/americanexpress_white.png');
});
$('.americanexpress').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/americanexpress.png');
});

// 11
  $('.att').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/att_white.png');
});
$('.att').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/att.png');
});

// 12
  $('.blackbaud').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/blackbaud_white.png');
});
$('.blackbaud').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/blackbaud.png');
});

// 13
  $('.intel').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/intel_white.png');
});
$('.intel').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/intel.png');
});

// 14
  $('.blackrock').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/blackrock_white.png');
});
$('.blackrock').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/blackrock.png');
});

// 15
  $('.cocacola').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/cocacola_white.png');
});
$('.cocacola').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/cocacola.png');
});

// 16
  $('.csc').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/csc_white.png');
});
$('.csc').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/csc.png');
});

// 17
  $('.deutsche_bank').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/deutsche_bank_white.png');
});
$('.deutsche_bank').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/deutsche_bank.png');
});

// 18
  $('.ds_solidworks').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/ds_solidworks_white.png');
});
$('.ds_solidworks').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/ds_solidworks.png');
});

// 19
  $('.everyday_health').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/everyday_health_white.png');
});
$('.everyday_health').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/everyday_health.png');
});

// 20
  $('.hootsuite').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/hootsuite_white.png');
});
$('.hootsuite').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/hootsuite.png');
});

// 21
  $('.farmersinsurance').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/farmersinsurance_white_new.png');
});
$('.farmersinsurance').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/farmersinsurance.png');
});

// 22
  $('.stanford').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/stanford_white.png');
});
$('.stanford').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/stanford.png');
});

// 23
  $('.mailchimp').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/mailchimp_white.png');
});
$('.mailchimp').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/mailchimp.png');
});

// 24
  $('.marketo').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/marketo_white.png');
});
$('.marketo').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/marketo.png');
});

// 25
  $('.gensler').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/gensler_white.png');
});
$('.gensler').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/gensler.png');
});

// 26
  $('.firstroundcapital').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/firstroundcapital_white.png');
});
$('.firstroundcapital').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/firstroundcapital.png');
});

// 27
  $('.birchbox').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/birchbox_white.png');
});
$('.birchbox').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/birchbox.png');
});

// 28
  $('.mastercard').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/mastercard_white.png');
});
$('.mastercard').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/mastercard.png');
});

// 29
  $('.allstate').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/allstate_white.png');
});
$('.allstate').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/allstate.png');
});

// 30
  $('.forrester').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/forrester_white.png');
});
$('.forrester').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/forrester.png');
});

// 31
  $('.sas').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/sas_white.png');
});
$('.sas').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/sas.png');
});

// 32
  $('.cisco').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/cisco_white.png');
});
$('.cisco').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/cisco.png');
});

// 33
  $('.equinix').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/equinix_white.png');
});
$('.equinix').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/equinix.png');
});

// 34
  $('.moz').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/moz_white.png');
});
$('.moz').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/moz.png');
});

// 35
  $('.adp').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/adp_white.png');
});
$('.adp').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/adp.png');
});

// 36
  $('.adroll').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/adroll_white.png');
});
$('.adroll').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/adroll.png');
});

// 37
  $('.adobe').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/adobe_white.png');
});
$('.adobe').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/adobe.png');
});

// 38
  $('.autodesk').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/autodesk_white.png');
});
$('.autodesk').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/autodesk.png');
});

// 39
  $('.salesforce').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/salesforce_white.png');
});
$('.salesforce').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/salesforce.png');
});

// 40
  $('.exacttarget').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/exacttarget_white.png');
});
$('.exacttarget').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/exacttarget.png');
});

// 41
  $('.nationwide').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/nationwide_white.png');
});
$('.nationwide').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/nationwide.png');
});


// 42
  $('.electronicarts').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/electronicarts_white.png');
});
$('.electronicarts').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/electronicarts.png');
});


// 43
  $('.square').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/square_white.png');
});
$('.square').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/square.png');
});

// 44
  $('.intuit').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/intuit_white.png');
});
$('.intuit').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/intuit.png');
});

// 45
  $('.netapp').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/netapp_white.png');
});
$('.netapp').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/netapp.png');
});

// 46
  $('.qlik').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/qlik_white.png');
});
$('.qlik').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/qlik.png');
});

// 47
  $('.rosetta_stone').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/rosetta_stone_white.png');
});
$('.rosetta_stone').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/rosetta_stone.png');
});

// 48
  $('.eloqua').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/eloqua_white.png');
});
$('.eloqua').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/eloqua.png');
});

// 49
  $('.dell').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/dell_white.png');
});
$('.dell').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/dell.png');
});

// 50
  $('.schneider_electric').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/schneider_electric_white.png');
});
$('.schneider_electric').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/schneider_electric.png');
});

// 51
  $('.thoughtworks').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/thoughtworks_white.png');
});
$('.thoughtworks').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/thoughtworks.png');
});

// 52
  $('.philips').mouseenter(function() {
	$(this).children('img').attr('src', 'images/logos/philips_white.png');
});
$('.philips').mouseleave(function(){
	$(this).children('img').attr('src', 'images/logos/philips.png');
});



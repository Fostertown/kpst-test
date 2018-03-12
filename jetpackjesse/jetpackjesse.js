function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js");

setTimeout(function () {

	includeJs("../jetpackjesse/jGravity-min.js");
	
	var map = []; // Or you could call it "key"
	onkeydown = onkeyup = function(e){
	    e = e || event; // to deal with IE
	    map[e.keyCode] = e.type == 'keydown';
	    /*insert conditional here*/
	}
	
	$(document.body).keyup(function (evt) {
		if(map[17] && map[16] && map[74]){ 
		
			console.log('jesse!');
		
			$('body').append('<div id="jesse"></div>');
			$('#jesse').css({
				'display': 'block',
				'width': '121px',
				'height': '180px',
				'background-image': 'url(../jetpackjesse/jesse.png)',
				'background-size': 'cover',
				'position': 'absolute',
				'left': '0',
				'top': '0',
				'z-index': '2'
			}).jGravity({
			               target: '#jesse',
			               ignoreClass: 'ignoreMe',
			               weight: 25,
			               depth: 5,
			               drag: true
			});
	    };
	});

}, 200);
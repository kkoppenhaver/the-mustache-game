function displayMustache(image_path) {
	var px_left = Math.round(Math.floor(Math.random() * ((w_width - width_padding) - width_padding)));
	var px_top = Math.round(Math.floor(Math.random() * ((w_height - height_padding) - height_padding)));

	//Place the image on the page
	$('<img class="mustache">').attr('src', image_path)
		.css('position', 'absolute')
		.css('left', px_left)
		.css('top', px_top)
		.css('max-width',  '20%')
		.appendTo('.mustache-container');
		
}

var mustaches = [
	chrome.extension.getURL('images/mustache1.svg'),
	chrome.extension.getURL('images/mustache2.svg'),
	chrome.extension.getURL('images/mustache3.svg'),
]

$('.mustache').remove();
var mustache_positions = [];

var w_height = $(window).height();
var w_width = $(window).width();
var mustache_width = w_width * .2;
var mustache_height = mustache_width / 2;


var width_padding = w_width * .2;
var height_padding = w_height * .2;

$('<div class="mustache-container" style="position: absolute;z-index:10000;width:' +  w_width + 'px; height:' + w_height + 'px; top: 0; left: 0;">').appendTo('body');



mustaches.forEach(function(mustache){
	displayMustache(mustache);
});

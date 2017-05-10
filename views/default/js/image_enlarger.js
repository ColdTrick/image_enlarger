define(function(require) {
	var $ = require('jquery');
	var elgg = require('elgg');
	var lightbox = require('elgg/lightbox');

	$(document).on('click', '.elgg-main img', function() {
		var $img = $(this);
		if ($img.parents('a').length) {
			return;
		}
		
		var src = $img.attr('src');
		if (!src) {
			return;
		}
		
		var title = false;
		if ($img.attr('title')) {
			title = $img.attr('title'); 
		} else if ($img.attr('alt')) {
			title = $img.attr('alt');
		}
		
		var opts = {
			width: '80%',
			height: '80%',
			maxWidth: '990px',
			maxHeight: '80%',
			title: title,
			html: '<center style="height: 100%;"><img src="' + src + '" style="width: 100%; height: 100%; object-fit: contain;" /></center>',
		};
		
		lightbox.open(opts);
	});

	$(document).on('mouseenter', '.elgg-main img', function() {
		var $img = $(this);
		if ($img.parents('a').length) {
			return;
		}
		
		var src = $img.attr('src');
		if (!src) {
			return;
		}
		
		// adds a pointer cursor to the image
		$img.css('cursor', 'zoom-in');
	});
});
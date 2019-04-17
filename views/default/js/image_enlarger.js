define(function(require) {
	var $ = require('jquery');
	var elgg = require('elgg');
	var lightbox = require('elgg/lightbox');
	
	var is_valid_image = function(elem) {
		var $img = $(elem);
		if (!$img.is('img')) {
			// not an img element
			return false;
		}
		
		if ($img.parents('a').length) {
			// img in a link
			return false;
		}
		
		return true;
	}
	
	var get_image_url = function(elem) {
		var $img = $(elem);
		if (!$img.is('img')) {
			return '';
		}
		
		var data = $img.data();
		if ((typeof data.highresUrl !== 'undefined')) {
			return data.highresUrl;
		}
		
		var src = $img.attr('src');
		if (src.length) {
			return src;
		}
		
		return '';
	}
	
	$(document).on('click', '.elgg-ouput img', function() {
		if (!is_valid_image(this)) {
			return;
		}
		
		var src = get_image_url(this);
		if (!src.length) {
			return;
		}
		
		var $img = $(this);
		
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
			html: '<div style="width: 100%; height: 100%; background-image:url(' + src + '); background-position: center center; background-size: contain; background-repeat: no-repeat;"></div>',
		};
		
		lightbox.open(opts);
	});

	$(document).on('mouseenter', '.elgg-output img', function() {
		if (!is_valid_image(this)) {
			return;
		}
		
		if (!get_image_url(this).length) {
			return;
		}
		
		var $img = $(this);
		
		// adds a pointer cursor to the image
		$img.css('cursor', 'zoom-in');
	});
});

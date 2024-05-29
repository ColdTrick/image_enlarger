import 'jquery';
import lightbox from 'elgg/lightbox';

function is_valid_image(elem) {
	var $img = $(elem);
	if (!$img.is('img')) {
		// not an img element
		return false;
	}
	
	if ($img.parents('a').length) {
		// img in a link
		return false;
	}
	
	if ($img.is('[usemap]')) {
		// img uses a clickmap
		return false;
	}
	
	return true;
}

function get_image_url(elem) {
	var $img = $(elem);
	if (!$img.is('img')) {
		return '';
	}
	
	var data = $img.data();
	if (typeof data.highresUrl !== 'undefined') {
		return data.highresUrl;
	}
	
	var src = $img.attr('src');
	if (src.length) {
		return src;
	}
	
	return '';
}

$(document).on('click', '.elgg-output img', function() {
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
	
	lightbox.open({
		width: '80%',
		height: '80%',
		maxWidth: '990px',
		maxHeight: '80%',
		title: title,
		html: '<div style="width: 100%; height: 100%; background-image:url(' + src + '); background-position: center center; background-size: contain; background-repeat: no-repeat;"></div>',
	});
});

$(document).on('mouseenter', '.elgg-output img', function() {
	if (!is_valid_image(this)) {
		return;
	}
	
	if (!get_image_url(this).length) {
		return;
	}
	
	// adds a pointer cursor to the image
	$(this).css('cursor', 'zoom-in');
});

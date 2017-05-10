<?php
/**
 * Start file for this plugin
 */

// default elgg event handlers
elgg_register_event_handler('init', 'system', 'image_enlarger_init');

/**
 * Called when the Elgg system get initialized
 *
 * @return void
 */
function image_enlarger_init() {
	elgg_require_js('image_enlarger');
}

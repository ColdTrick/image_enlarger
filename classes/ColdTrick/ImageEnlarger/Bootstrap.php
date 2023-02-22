<?php

namespace ColdTrick\ImageEnlarger;

use Elgg\DefaultPluginBootstrap;

/**
 * Plugin bootstrap
 */
class Bootstrap extends DefaultPluginBootstrap {
	
	/**
	 * {@inheritDoc}
	 */
	public function init() {
		elgg_require_js('image_enlarger');
	}
}

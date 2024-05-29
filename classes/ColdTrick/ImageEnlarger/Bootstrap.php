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
		elgg_import_esm('image_enlarger');
	}
}

<?php

/**
 * Plugin Name:       Uzair Giveaway
 * Description:       Uzair-Giveaway Block Description From Main PHP File
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Muhammad Uzair
 * Author URI:	      https://github.com/heyitsuzair
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       uzair-giveaway
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_uzair_giveaway_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_uzair_giveaway_block_init');
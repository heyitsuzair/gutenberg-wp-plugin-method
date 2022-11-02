import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

/**
 * Internal dependencies
 */
import edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	description: metadata.description,
	category: metadata.category,
	icon: metadata.icon,

	edit,

	save,
});

/**
 * Custom Child Blocks
 */

import { childRowMetaData, name, settings } from "./blocks/social-row";
registerBlockType({ name, ...childRowMetaData }, settings);

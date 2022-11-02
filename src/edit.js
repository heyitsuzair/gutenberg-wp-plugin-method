import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const TEMPLATE = [
	["core/image", {}],
	[
		"core/heading",
		{
			placeholder: "Giveaway Title",
		},
	],
	[
		"core/paragraph",
		{
			placeholder: "Giveaway Description",
		},
	],
	["create-block/uzair-giveaway-social-row"],
	[
		"core/button",
		{
			placeholder: "Call To Action",
		},
	],
];

import "./editor.scss";

const ALLOWED_BLOCKS = ["create-block/uzair-giveaway-social-row"];

export default function edit() {
	return (
		<div {...useBlockProps}>
			<InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} />
		</div>
	);
}

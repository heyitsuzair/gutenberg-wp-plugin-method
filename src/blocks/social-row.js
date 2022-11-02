import childRowMetaData from "./social-row-block.json";
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
	PlainText,
} from "@wordpress/block-editor";

import {
	PanelBody,
	PanelRow,
	RadioControl,
	Dashicon,
} from "@wordpress/components";

const { name } = childRowMetaData;

export { childRowMetaData, name };

// const TEMPLATE = [
// 	[
// 		"core/columns",
// 		{},
// 		[
// 			[
// 				"core/column",
// 				{ templateLock: "all", width: "30%", verticalAlign: "center" },
// 				[["core/image", { sizeSlug: "thumbnail" }]],
// 			],
// 			["core/column", { templateLock: "all" }, [["core/button"]]],
// 		],
// 	],
// ];

export const settings = {
	description: childRowMetaData.description,
	category: childRowMetaData.category,
	icon: childRowMetaData.icon,
	attributes: {
		accountType: {
			type: "string",
			default: "twitter",
		},
		twitter: {
			default: {
				text: "",
				account: "",
			},
		},
		linkedin: {
			default: {
				text: "",
				message: "",
				url: "",
			},
		},
		facebook: {
			default: {
				text: "",
				url: "",
			},
		},
	},
	edit: ({ attributes, setAttributes }) => {
		const RADIO_OPTIONS = [
			{ label: "Follow On Twitter", value: "twitter" },
			{ label: "Follow On Facebook", value: "facebook" },
			{ label: "Follow On Linkedin", value: "linkedin" },
		];
		return (
			<div {...useBlockProps}>
				<InspectorControls style={{ marginBottom: "2rem" }}>
					<PanelBody title="">
						<PanelRow>
							<RadioControl
								label="Social Media"
								help="Type Of Social Media To Use"
								selected={attributes.accountType}
								options={RADIO_OPTIONS}
								onChange={(newValue) =>
									setAttributes({ accountType: newValue })
								}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				{attributes.accountType === "twitter" && (
					<div>
						<Dashicon icon="twitter" />
						<PlainText
							placeholder="Follow Me On Twitter"
							value={attributes.twitter.text}
							onChange={(newValue) =>
								setAttributes({
									twitter: { ...attributes.twitter, text: newValue },
								})
							}
						/>
						<PlainText
							placeholder="Twitter Username"
							value={attributes.twitter.account}
							onChange={(newValue) =>
								setAttributes({
									twitter: { ...attributes.twitter, account: newValue },
								})
							}
						/>
					</div>
				)}
				{attributes.accountType === "facebook" && (
					<div>
						<Dashicon icon="facebook" />
						<PlainText
							placeholder="Follow Me On Facebook"
							value={attributes.facebook.text}
							onChange={(newValue) =>
								setAttributes({
									facebook: { ...attributes.facebook, text: newValue },
								})
							}
						/>
					</div>
				)}
				{attributes.accountType === "linkedin" && (
					<div>
						<Dashicon icon="linkedin" />
						<PlainText
							placeholder="Follow Me On Linkedin"
							value={attributes.linkedin.text}
							onChange={(newValue) =>
								setAttributes({
									linkedin: { ...attributes.linkedin, text: newValue },
								})
							}
						/>
					</div>
				)}
				{attributes.twitter.account} <br /> {attributes.twitter.text}
			</div>
		);
	},
	save: ({ attributes }) => {
		return (
			<div {...useBlockProps}>
				{attributes.accountType === "twitter" && (
					<div>
						<Dashicon icon="twitter" />
						<PlainText value={attributes.twitter.text} />
						<PlainText value={attributes.twitter.account} />
					</div>
				)}
				{attributes.accountType === "facebook" && (
					<div>
						<Dashicon icon="facebook" />
						<PlainText value={attributes.facebook.text} />
					</div>
				)}
				{attributes.accountType === "linkedin" && (
					<div>
						<Dashicon icon="linkedin" />
						<PlainText value={attributes.linkedin.text} />
					</div>
				)}
				{attributes.twitter.account} <br /> {attributes.twitter.text}
			</div>
		);
	},
};

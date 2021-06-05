import React from "react";
import { shallow } from "enzyme";
import { Content, ContentSection } from "./Content";

const content = {
	heading: "Meet the Band",
	subheading:
    "Gatsby and Storybook come together for the first time to bring you an elegant, efficient, and practical development experience.",
	sections: [
		{
			heading: "Share your blocks across Gatsby apps",
			body: "Rockin' Blocks enables design systems to flourish with reusable block components across all of your applications.",
			buttonText: "Start Jamming",
			buttonLink: "/docs/v0/introduction"
		},
		{
			heading: "Gatsby & Storybook: Rock of Ages",
			body: "Gatsby and Storybook are two rockstars that are about to go on tour, and you're going with them! Pick up your axe and start shredding: start a Rockin' Blocks project today!",
			buttonText: "Pick Up Your Axe",
			buttonLink: "/docs/v0/introduction"
		},
		{
			heading: "Documentation-driven jam sessions",
			body: "Write your documentation hand-in-hand with your application. With Markdown support out of the box, including code highlighting with PrismJS and the Nord theme.",
			buttonText: "Craft Masterpiece",
			buttonLink: "/docs/v0/introduction"
		},
		{
			heading: "Join the Discord",
			body: "Interested in contributing? Want to share a great idea? Open source means open to new ideas and suggestions. Join the Discord!",
			buttonText: "Join the Band",
			buttonLink: "//discord.gg/vmFSbjuP25"
		}
	]
};

describe("<Content />", () => {
	it("should render", () => {
		const wrapper = shallow(<Content {...content}/>);

		expect(wrapper.find(ContentSection).length).toEqual(4);
		expect(wrapper.html()).toContain("Meet the Band");
	});
});

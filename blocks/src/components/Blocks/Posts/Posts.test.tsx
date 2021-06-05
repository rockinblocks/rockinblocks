import React from "react";
import { shallow } from "enzyme";
import { Posts } from "./Posts";

describe("<Posts />", () => {
	it("should render", () => {
		const wrapper = shallow(<Posts posts={[]}/>);

		expect(wrapper.html()).toBeTruthy();
	});
});

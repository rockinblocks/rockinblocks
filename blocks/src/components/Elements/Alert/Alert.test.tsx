import React from "react";
import { shallow } from "enzyme";
import { Alert } from "./Alert";

describe("<Alert />", () => {
	it("should render", () => {
		const wrapper = shallow(<Alert text="Rockin' Blocks!" type="info"/>);

		expect(wrapper.html()).toBeTruthy();
	});
});

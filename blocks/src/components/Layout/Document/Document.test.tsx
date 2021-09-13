import React from "react";
import { shallow } from "enzyme";
import { Document } from "./Document";
import DocumentData from "./data";

describe("<Document />", () => {
	it("should display document HTML", () => {
		const wrapper = shallow(<Document {...DocumentData}/>);
		expect(wrapper.find("[data-rb=\"document\"]").html()).toContain(
			DocumentData.html
		);
	});
});

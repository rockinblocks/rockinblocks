import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from './Sidebar';

const menuItems = [
	{
		title: 'Using the monorepo',
		path: 'docs/v0.1.0/monorepo',
		order: '1.0'
	}
];

describe('<Sidebar />', () => {
	it('should render', () => {
		const wrapper = shallow(<Sidebar menuItems={menuItems} />);

		expect(wrapper).toBeDefined();
	});
});

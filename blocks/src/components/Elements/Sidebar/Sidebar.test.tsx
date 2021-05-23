import React from 'react';
import { Link } from 'gatsby';
import { shallow } from 'enzyme';
import { Sidebar } from './Sidebar';

const menuItems = [
	{
		title: 'Using the monorepo',
		path: 'docs/v0.1.0/monorepo',
		order: '2.0'
	},
	{
		title: 'Installation',
		path: 'docs/v0.1.0/installation',
		order: '1.0'
	}
];

describe('<Sidebar />', () => {
	it('should render the ordered menu items', () => {
		const wrapper = shallow(<Sidebar menuItems={menuItems} />);
		const [installation, monorepo] = menuItems;

		expect(wrapper.text()).toContain(installation.title);
		expect(wrapper.find(Link).first().props().to).toEqual(installation.path);

		expect(wrapper.text()).toContain(monorepo.title);
		expect(wrapper.find(Link).at(1).props().to).toEqual(monorepo.path);
	});
});

import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from './Badge';

describe('<Badge />', () => {
	it('should render', () => {
		const wrapper = shallow(<Badge text="Rock On!"/>);

		expect(wrapper.find('span[data-rb="badge"] p').text()).toContain('Rock On!');
	});
});

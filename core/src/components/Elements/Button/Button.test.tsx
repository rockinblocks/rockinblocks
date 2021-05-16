import React from 'react';
import { shallow } from 'enzyme';
import { Button, IButtonProps } from './Button';

describe('<Button />', () => {
	it('should display correct text', () => {
		const props: IButtonProps  = {
			text: 'Let\'s Get Started'
		};
		const wrapper = shallow(<Button {...props} />);

		expect(wrapper.find('[data-rb="button-text"]').text()).toContain(props.text);
	});

	it('should display default text if none is given', () => {
		const props: IButtonProps = {}
		const wrapper = shallow(<Button {...props} />);

		expect(wrapper.find('span[data-rb="button-text"]').text()).toContain("Learn More");
	});

	// TODO
	//
	// it('should change background colors', () => {
	// 	const props: IButtonProps  = {
	// 		backgroundColor: '#0000FF'
	// 	};
	// 	const wrapper = shallow(<Button {...props} />);
	// 	let button = wrapper.find('span[data-rb="button-text"]');
	// 	expect(button).toHaveStyle(`background-color: ${props.backgroundColor}`);
	// });
});


// text: string;
// backgroundColor?: string;
// textColor?: string;
// to?: string;
// onClick?: () => Record<string, unknown>;
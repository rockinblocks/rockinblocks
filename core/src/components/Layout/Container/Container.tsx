import React from 'react';
import styles from './Container.scss';

export interface IContainerProps {
	children?: any;
	display?: string;
	flex?: number;
	flexDirection?: any;
	justifyContent?: string;
}

export const Container: React.FC<
IContainerProps & React.HTMLAttributes<HTMLDivElement>
> = props => {
	const {display, flex, flexDirection, justifyContent, children} = props;
	const style = {
		display,
		flex,
		flexDirection,
		justifyContent
	};
	return (
		<div className={styles.container} style={{...style}} {...props}>
			{children}
		</div>
	);
};

export default Container;

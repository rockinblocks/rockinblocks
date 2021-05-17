import React, { CSSProperties, ReactNode } from 'react';
import styles from './Container.scss';

export interface IContainerProps {
	children?: ReactNode;
	display?: string;
	flex?: number | string;
	flexDirection?: string;
	justifyContent?: string;
	style?: React.CSSProperties | undefined;
}

export const Container: React.FC<
IContainerProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties
> = props => {
	const {
		display,
		flex,
		flexDirection,
		justifyContent,
		children,
		style
	} = props;
	const styleProps = {
		display,
		flex,
		flexDirection,
		justifyContent,
		...style
	};
	return (
		<div className={styles.container} style={{ ...styleProps }} {...props}>
			{children}
		</div>
	);
};

export default Container;

import React, { CSSProperties, ReactNode } from 'react';
import styles from './Box.scss';

export interface IBoxProps {
	children?: ReactNode;
	display?: string;
	flex?: number | string;
	flexDirection?: string;
	justifyContent?: string;
	style?: CSSProperties | undefined;
}

export const Box: React.FC<
IBoxProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties
> = (props): JSX.Element => {
	const { children, display, flex, flexDirection, justifyContent, style } =
    props;

	const styleProps = {
		display,
		flex,
		flexDirection,
		justifyContent,
		...style
	};

	return (
		<div className={styles.box} style={{ ...styleProps }}>
			{children}
		</div>
	);
};

export default Box;

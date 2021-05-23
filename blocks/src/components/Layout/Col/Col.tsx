import React, { CSSProperties, ReactNode } from 'react';
import styles from './Col.scss';

export interface IColProps {
	children?: ReactNode;
	display?: string;
	flex?: number | string;
	flexDirection?: string;
	justifyContent?: string;
	style?: CSSProperties;
}

export const Col: React.FC<
IColProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties
> = props => {
	const { display, flex, flexDirection, justifyContent, children, style } =
    props;
	const styleProps = {
		display,
		flex,
		flexDirection,
		justifyContent,
		...style
	};
	return (
		<div className={styles.col} style={{ ...styleProps }}>
			{children}
		</div>
	);
};

export default Col;

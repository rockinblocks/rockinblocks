import React from 'react';
import styles from './Row.scss';

export interface IRowProps {
	children?: React.ReactNode;
	display?: string;
	flexDirection?: any;
	flexWrap?: string;
	justifyContent?: string;
	style?: React.CSSProperties | undefined;
}

export const Row: React.FC<IRowProps & React.HTMLAttributes<HTMLDivElement>> = (
	props
): JSX.Element => {
	const {children, display, flexDirection, justifyContent, style} = props;
	const styleProps = {
		display,
		flexDirection,
		justifyContent,
		...style
	};
	return (
		<div className={styles.row} style={{...styleProps}} {...props}>
			{children}
		</div>
	);
};

export default Row;

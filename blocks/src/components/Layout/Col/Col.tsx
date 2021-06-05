import React, { CSSProperties, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Col.scss";

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
	const {
		display,
		flex,
		flexDirection,
		justifyContent,
		children,
		style,
		className
	} = props;
	const styleProps = {
		display,
		flex,
		flexDirection,
		justifyContent,
		...style
	};
	return (
		<div className={clsx([styles.col, className])} style={{ ...styleProps }}>
			{children}
		</div>
	);
};

export default Col;

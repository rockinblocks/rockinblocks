import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './Alert.scss';

export interface AlertProps {
	text: string;
	type: string;
}

export const Alert: FC<AlertProps> = ({ text, type }): JSX.Element => {
	return (
		<div className={clsx(styles.alert, type)}>
			<span>{text}</span>
		</div>
	);
};

export default Alert;

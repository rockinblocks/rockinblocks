import React, { FC } from 'react';
import './Button.scss';

export interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  link?: string;
  onClick?: () => {};
}

export const Button: FC<ButtonProps> = (props) => {
  const { text, backgroundColor, textColor, link } = props;

  return (
    <div className="rd-button" style={{ backgroundColor }} {...props}>
      <span className="rd-button__text" style={{ color: textColor || '#ffffff' }}>
        {text}
      </span>
    </div>
  );
};

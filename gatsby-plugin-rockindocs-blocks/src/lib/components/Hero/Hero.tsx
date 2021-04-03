import React, { FC } from 'react';
import './Hero.scss';

export interface HeroProps {
  backgroundColor: string;
  heading: string;
  subheading?: string;
}

export const Hero: FC<HeroProps> = ({ backgroundColor = '#FF0000', heading, subheading }) => {
  return (
    <div className="rd-hero" style={{ backgroundColor }}>
      <h1 className="rd-hero__heading">{heading}</h1>
      <p className="rd-hero__subheading">{subheading}</p>
    </div>
  );
};

import React, { FC } from 'react';
import './Layout.scss';
import { Button } from '../../Elements/Button';

export interface LayoutProps {
  heading: string;
  subheading?: string;
}

export interface LayoutSection {
  heading: string;
  body: string;
  buttonText: string;
  buttonLink: string;
}

export const Layout: FC<LayoutProps> = ({ heading, subheading }) => {
  const sections: LayoutSection[] = [
    {
      heading: 'Sed ut perspiciatis',
      body:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
      buttonText: 'Learn More',
      buttonLink: 'Lorem Ipsum',
    },
    {
      heading: 'Lorem ipsum dolor',
      body:
        'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      buttonText: 'Learn More',
      buttonLink: 'Lorem Ipsum',
    },
    {
      heading: 'Nemo enim ipsam',
      body:
        'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
      buttonText: 'Learn More',
      buttonLink: 'Lorem Ipsum',
    },
    {
      heading: 'Tempor incididunt',
      body:
        'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.',
      buttonText: 'Learn More',
      buttonLink: 'Lorem Ipsum',
    },
  ];

  return (
    <div className="rd-layout rd-layout--alpha rd-layout--light">
      <div className="rd-layout__container">
        <h2>{heading}</h2>
      </div>
      <div className="rd-layout__container">
        {sections && (
          <div className="rd-layout__row">
            {sections.map(({ heading: sectionHeading, body, buttonLink, buttonText }) => {
              return (
                <div className="rd-layout__column">
                  <div className="rd-layout__section">
                    <h3 className="rd-layout__heading">{sectionHeading}</h3>
                    <p className="rd-layout__body">{body}</p>
                    <Button text={buttonText} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

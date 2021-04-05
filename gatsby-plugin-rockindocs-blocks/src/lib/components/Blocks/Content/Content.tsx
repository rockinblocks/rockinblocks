import React, { FC } from 'react';
import './Content.scss';
import { Button } from '../../Elements/Button';

export interface ContentProps {
  heading: string;
  subheading?: string;
}

export interface ContentSection {
  heading: string;
  body: string;
  buttonText: string;
  buttonLink: string;
}

export const Content: FC<ContentProps> = ({ heading, subheading }) => {
  const sections: ContentSection[] = [
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
    <div className="rd-content rd-content--alpha rd-content--light">
      <div className="rd-content__container">
        <h2>{heading}</h2>
      </div>
      <div className="rd-content__container">
        {sections && (
          <div className="rd-content__row">
            {sections.map(({ heading: sectionHeading, body, buttonLink, buttonText }) => {
              return (
                <div className="rd-content__column">
                  <div className="rd-content__section">
                    <h3 className="rd-content__heading">{sectionHeading}</h3>
                    <p className="rd-content__body">{body}</p>
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

import React, { FC } from 'react';
import './Navbar.scss';

export interface NavbarProps {
  appName?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const Navbar: FC<NavbarProps> = ({ appName }) => {
  const navigation = [
    {
      text: 'Get Started',
      path: '/get-started',
    },
    {
      text: 'Docs',
      path: '/docs',
    },
  ];

  return (
    <div className="rd-navbar">
      <div className="rd-navbar__container">
        <div className="rd-navbar__row">
          <div className="rd-navbar__column">
            <div className="rd-navbar__app-name-wrapper">
              <span className="rd-navbar__app-name">{appName}</span>
            </div>
          </div>
          <div className="rd-navbar__column">
            <div className="rd-navbar__navigation-wrapper">
              <ul className="rd-navbar__navigation">
                <li>
                  <span>Get Started</span>
                </li>
                <li>
                  <span>Docs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

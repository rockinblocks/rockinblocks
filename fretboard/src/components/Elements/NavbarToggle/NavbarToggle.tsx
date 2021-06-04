import React, { FC } from "react";
import styles from "./NavbarToggle.module.scss";

export interface INavbarToggleProps {
  color?: string;
}

export const NavbarToggle: FC<INavbarToggleProps> = (): JSX.Element => {
  return (
    <div className={styles["rb-navbar-toggle"]}>
      <span />
      <span />
      <span />
    </div>
  );
};

export default NavbarToggle;

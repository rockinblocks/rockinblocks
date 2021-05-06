import React, { FC } from "react"
import styles from "./NavbarToggle.scss"

export interface INavbarToggleProps {
  color?: string
}

export const NavbarToggle: FC<INavbarToggleProps> = (props): JSX.Element => {
  const { color } = props
  return (
    <div className={styles["rb-navbar-toggle"]}>
      <span />
      <span />
      <span />
    </div>
  )
}

export default NavbarToggle

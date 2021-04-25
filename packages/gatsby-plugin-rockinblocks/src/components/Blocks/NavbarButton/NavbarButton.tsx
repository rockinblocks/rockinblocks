import React, { FC } from "react"
import styles from "./NavbarButton.scss"

export interface NavbarButtonProps {
  exampleProp: string
}

export const NavbarButton: FC<NavbarButtonProps> = (): JSX.Element => {
  return (
    <div className={styles.navbarButton}>
      <p>
        <strong>NavbarButton</strong>
      </p>
      <p>Grabbed hold of your coat tail, but it come off in my hand.</p>
      <p>I reached for your lapel, but it weren&apos;t sewn on so grand.</p>
    </div>
  )
}

export default NavbarButton

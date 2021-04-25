import React, { FC } from "react"
import { Link } from "gatsby"
import styles from "./Sidebar.scss"

export interface ISidebarMenuItem {
  title: string
  path: string
}
export interface ISidebarProps {
  menuItems: ISidebarMenuItem[]
}

export const Sidebar: FC<ISidebarProps> = ({ menuItems }) => {
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__navigation-wrapper"]}>
        <ul className={styles["sidebar__navigation"]}>
          {menuItems &&
            menuItems.map((menuItem: ISidebarMenuItem) => {
              const { path, title } = menuItem
              return (
                <li key={path}>
                  <Link to={path}>{title}</Link>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

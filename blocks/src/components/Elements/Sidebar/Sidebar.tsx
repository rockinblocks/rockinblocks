import React, { FC } from "react"
import { Link } from "gatsby"
import styles from "./Sidebar.scss"

export interface ISidebarMenuItem {
  title: string
  path: string
  order: string
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
              const { path, title, order } = menuItem
              const [top, sub] = order.split(".")

              if (Number(sub)) {
                return (
                  <li className={styles["sidebar__nav-item-sub"]} key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                )
              }

              return (
                <li className={styles["sidebar__nav-item-top"]} key={path}>
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

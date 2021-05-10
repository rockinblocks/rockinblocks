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
            menuItems.map((menuItem: ISidebarMenuItem, index) => {
              const prevItem = menuItems[index - 1]
              const nextItem = menuItems[index + 1]

              const { path, title, order } = menuItem
              const { order: orderPrev } = prevItem
              const { order: orderNext } = nextItem
              const [top, sub] = order.split(".")
              const [topPrev, subPrev] = orderPrev.split(".")
              const [topNext, subNext] = orderNext.split(".")

              let Wrapper = ({ children }) => <>{children}</>
              if (top > topPrev && top === topNext) {
                Wrapper = ({ children }) => <ul>{children}</ul>
              }

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

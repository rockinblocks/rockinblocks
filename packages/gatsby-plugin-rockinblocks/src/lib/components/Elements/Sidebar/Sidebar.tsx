import React, { FC } from "react"
import { Link } from "gatsby"
import { Box, Col, Container, Row } from "../../Layout"
import styles from "./Sidebar.scss"
import { DocumentInterface } from "../Document/Document"

export interface SidebarProps {
  documents?: DocumentInterface[]
}

export const Sidebar: FC<SidebarProps> = props => {
  const { documents } = props

  return (
    <div className={styles["rd-sidebar"]}>
      <div className={styles["rd-sidebar__navigation-wrapper"]}>
        <ul className={styles["rd-sidebar__navigation"]}>
          {documents &&
            documents.map(document => (
              <li key={document.path}>
                <Link to={document.path}>{document.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

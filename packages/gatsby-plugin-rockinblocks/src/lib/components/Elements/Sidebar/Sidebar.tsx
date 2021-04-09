import React, { FC } from "react"
import { Link } from "gatsby"
import { Box, Col, Container, Row } from "../../Layout"
import styles from "./Sidebar.scss"

export interface SidebarProps {
  documents: Document[]
}

export const Sidebar: FC<SidebarProps> = props => {
  const { documents } = props

  return (
    <div className={styles["rd-sidebar"]}>
      <ul className={styles["rd-sidebar__menu"]}>
        {documents &&
          documents.map(document => (
            <li key={document.path}>
              <Link to={document.path}>{document.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Sidebar

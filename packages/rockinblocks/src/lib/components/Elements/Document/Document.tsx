import React, { FC } from "react"
import { Sidebar } from "../Sidebar"
import { Box } from "../../Layout"
import styles from "./Documents.scss"

export interface DocumentInterface {
  path: string
  title: string
}
export interface DocumentProps {
  documents?: DocumentInterface[]
}

export const Document: FC<DocumentProps> = ({ documents }) => {
  return (
    <>
      <Box className="rd-document" display="flex">
        <Box flex={25}>
          <Sidebar documents={documents} />
        </Box>
        <Box flex={75}>
          <div className={styles["rd-document__main"]}>
            <main>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </main>
          </div>
        </Box>
      </Box>
    </>
  )
}

export default Document

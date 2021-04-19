import React, { FC } from "react"
import { Box } from "../../Layout"
import styles from "./Document.scss"

export interface IDocument {
  title: string
  date_created: string
  date_updated: string
  keywords: string
  path: string
  description: string
  type: string
  html: string
}
export interface DocumentProps {
  document: IDocument
}

export const Document: FC<DocumentProps> = ({ document }) => {
  return (
    <>
      <Box className="rd-document" display="flex">
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

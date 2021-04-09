import React, { FC } from "react"
import { Hero } from "../../Blocks/Hero"
import { Content } from "../../Blocks/Content"
import { Sidebar } from "../Sidebar"
import { Navbar } from "../Navbar"
import { Box, Col, Container, Row } from "../../Layout"

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
        <Sidebar documents={documents} />
        <main className="rd-document__main">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </main>
      </Box>
    </>
  )
}

export default Document

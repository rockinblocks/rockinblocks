import React from "react"
import { useSettings } from "../../Utilities/Settings"
import { Navbar } from "@rockinblocks/gatsby-plugin-rockinblocks"

const Header = () => {
  const { appName } = useSettings()

  return (
    <>
      <header>
        <div className="header">
          <Navbar appName={appName} color={"#ffffff"} backgroundColor="#ffffff" />
        </div>
      </header>
    </>
  )
}

export default Header

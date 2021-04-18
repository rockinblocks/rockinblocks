import React from "react"
import { useSettings } from "../../Utilities/Settings"
import { useTheme } from "../../Utilities/Theme"
import { Navbar } from "@rockinblocks/gatsby-plugin-rockinblocks"

const Header = () => {
  const { appName } = useSettings()
  const { primaryColor } = useTheme()

  return (
    <header>
      <div className="header" style={{ backgroundColor: primaryColor }}>
        <Navbar appName={appName} color={"#ffffff"} backgroundColor="#ffffff" />
      </div>
    </header>
  )
}

export default Header

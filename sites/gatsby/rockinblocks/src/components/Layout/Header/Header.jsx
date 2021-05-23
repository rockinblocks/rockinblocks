import React from "react"
import { useSettings } from "../../Utilities/Settings"
import { Alert, Navbar } from "@rockinblocks/gatsby-plugin-rockinblocks"

const Header = () => {
  const { appName } = useSettings()

  return (
    <>
      <header>
        <Alert
          text="This site collects basic user information to help improve our user experiences. By continuing to use this site, you agree to our Privacy Policy."
          link={{
            text: "View",
            location: "privacy-policy",
          }}
        />
        <div className="header">
          <Navbar appName={appName} color={"#ffffff"} backgroundColor="#ffffff" />
        </div>
      </header>
    </>
  )
}

export default Header

import React from 'react'
import { Link } from 'gatsby'
import Container from '@layout/Container/Container'
import { useSettings } from '../../Utilities/Settings'
import { useTheme } from '../../Utilities/Theme'

const Header = () => {

  const { appName } = useSettings()
  const { primaryColor } = useTheme()

  return (
    <header>
      <div className="header" style={{ backgroundColor: primaryColor }}>
        <Container>
          <div className="header__logo">
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              RD
            </Link>
          </div>
          <div className="header__title">
            <h1>
              <Link to="/">{appName}</Link>
            </h1>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header

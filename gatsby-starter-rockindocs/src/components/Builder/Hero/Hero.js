import React from 'react'
import { useTheme } from '../../Utilities/Theme'
import { Container } from '@layout/Container/Container'

export const Hero = ({ heading, subheading }) => {
  const { primaryColor } = useTheme()
  return (
    <div
      className="rd-hero"
      style={{ backgroundColor: primaryColor, display: 'block' }}
    >
      <Container column>
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </Container>
    </div>
  )
}

export default Hero

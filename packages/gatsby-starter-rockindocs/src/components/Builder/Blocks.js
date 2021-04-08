import React, { useEffect, useState } from 'react'
import { useBuilder } from '../Builder'
import { Hero } from '@rockindocshq/gatsby-plugin-rockinblocks'

export const Blocks = () => {
  const { rawJson } = useBuilder()
  const [blocks, setBlocks] = useState([])

  useEffect(() => {
    if (rawJson) {
      const parsed = JSON.parse(rawJson)
      setBlocks(parsed.builder)
    }
  }, [rawJson])

  const getBlockComponent = block => {
    switch (block._template) {
      case 'builder-hero':
        return (
          <Hero
            heading={block?.rawJson?.heading ?? ''}
            seoHeading={block?.rawJson?.seoHeading ?? ''}
            subheading={block?.rawJson?.subheading ?? ''}
            buttonText={block?.rawJson?.buttonText ?? ''}
            buttonLink={block?.rawJson?.buttonLink ?? ''}
          />
        )
      default:
        break
    }
  }



  return (
    <div>
      {blocks &&
        blocks.map(block => (
          <div
            key={`${block._template}_${Math.random()
              .toString(36)
              .slice(2)}`}
          >
            {getBlockComponent(block)}
          </div>
        ))}
    </div>
  )
}

export default Blocks

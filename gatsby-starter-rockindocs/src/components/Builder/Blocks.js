import React, { useEffect, useState } from 'react'
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { useBuilder } from '../Builder'
import { Hero } from './Hero'

export const Blocks = () => {
  const { rawJson, form } = useBuilder()
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
            subheading={block?.rawJson?.subheading ?? ''}
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

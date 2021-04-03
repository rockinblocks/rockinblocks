import React from 'react'

export const Container = ({
  children,
  wrap,
  column,
  columnReverse,
  rowReverse,
  padded,
  paddedSm,
}) => {
  return (
    <div
      className={`container
        ${wrap ? 'wrap' : ''}
        ${column ? 'column' : ''}
        ${columnReverse ? 'column-reverse' : ''}
        ${rowReverse ? 'row-reverse' : ''}
        ${padded ? 'padded' : ''}
        ${paddedSm ? 'padded-sm' : ''}
      `}
    >
      {children}
    </div>
  )
}

export default Container

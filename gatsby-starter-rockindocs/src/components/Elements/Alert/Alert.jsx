import React from 'react';
import Container from '@layout/Container/Container'

const Alert = ({ type, children }) => {
  return (
    <div className={ `alert ${type}` }>
      <Container column>
        { children }
      </Container>
    </div>
   );
}

export default Alert;
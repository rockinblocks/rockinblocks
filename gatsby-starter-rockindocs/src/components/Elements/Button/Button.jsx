import React from 'react';
import Container from '@layout/Container/Container'

const Button = ({ type, children }) => {
  return (
    <div className={ `rd-button ${type}` }>
        { children }
    </div>
   );
}

export default Button;
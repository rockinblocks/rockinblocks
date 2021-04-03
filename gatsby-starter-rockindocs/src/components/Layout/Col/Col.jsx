import React from 'react';
 const Col = ({ display, flex, justifyContent, children }) => {
   const styles = {
     display,
     flex,
     justifyContent,
   }
   return (
    <div className="col" style={ styles }>
      { children }
    </div>
  )
 }

 export default Col
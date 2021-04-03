import React, { useContext, createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ToastContext = createContext({})

export const useToast = () => {
  useContext(ToastContext)
}

export const useToastProvider = () => {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const toastsArr = []
    toastsArr.push({
      message: 'Welcome, my son. Welcome to the machine!'
    })
    setToasts(toastsArr)
  }, [])

  return {
    toasts
  }
}

export const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={useToastProvider()}>
      { children }
    </ToastContext.Provider>
  )
}

ToastProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
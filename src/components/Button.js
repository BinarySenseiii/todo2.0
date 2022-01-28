import React from 'react'
import styles from '../styles/modules/button.module.scss'
import { getClasses } from '../utils/getClasses'

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
}

const Button = ({ text, variant = 'primary', type, ...rest }) => {
  return (
    <div
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}
    >
      {text}
    </div>
  )
}

const SelectButton = ({ children, ...rest }) => {
  return (
    <select
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  )
}

export { SelectButton }
export default Button

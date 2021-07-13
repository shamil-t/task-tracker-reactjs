import React from 'react'

const Button = ({ text, onAdd, color }) => {
  return (
    <div>
      <button className='btn' onClick={onAdd} style={{ backgroundColor: color }}>{text}</button>
    </div>
  )
}

Button.defaultProps = {
  text: 'Add'
}

export default Button

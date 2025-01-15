import React from 'react'
import './Input.css'

const Input = () => {
    return (
      <div>
      <label htmlFor='colorName'>Color Name</label>
            <input type='text' id='colorName' name='colorName' placeholder='Add color name' className="input" autoFocus/>
    </div>
  )
}

export default Input
import React from 'react'
import './Input.css' 

const Input = () => {
    return (
      
      <div>

          <input type='text' id='colorName' name='colorName' placeholder='Add color name' className="input" aria-label='Color Name' autoFocus/>
    </div>
  )
}

export default Input
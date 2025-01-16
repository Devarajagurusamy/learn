import React from 'react'
import './Input.css' 

const Input = () => {
    return (
      <form>
        <label htmlFor='colorName'>Color Name</label>
        <input
          className='input'
          type='text'
          id='colorName'
          name='colorName'
          placeholder='Add Color Name'
        />
        <br />
        <button
          className='button'
          onClick={(e) => {isDarkText ? setIsDarkText(false) : setIsDarkText(true)}}
        >
          Toggle text color
        </button>
    </form>
    )
}

export default Input
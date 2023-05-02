import React from 'react'
import './Search.css'

function Search({placeholder}) {
  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder}/>
        <div className='searchIcon'></div>
        </div>  
    </div>
  )
}

export default Search
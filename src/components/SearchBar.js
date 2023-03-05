import React from 'react'
import "../styles/styles.css"
import Dropdown from './Dropdown'
function SearchBar() {
  return (
    <div className='searchcmpt'>
        <div className='searchbar' style={{fontSize:"2rem"}}>
            <Dropdown/>
            <input  placeholder='Search IMDb'/>
        </div>
    </div>
  )
}

export default SearchBar
import React from 'react'

const Search = ({text,setText,handleClick}) => {

    const handleChange = (e)=> {
          setText(e.target.value)
    }

  return (
    <div className='search'>
        <h1 className='heading'>Shivansh Mobile Galaxy</h1>
        <input type="text" placeholder='Enter Your mobile Name' onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default Search;


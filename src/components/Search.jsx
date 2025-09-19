import React from 'react'

const Search = ({searchTerm, setsearchTerm}) => {
  return (
    <div className='search'>
        <div>
            {/* <p style={{color:'white '}}>{searchTerm} </p> */}
            <img src="/search.svg" alt="search" />

            <input 
                type="text" 
                placeholder='search for movies'
                value={searchTerm}
                onChange={(event)=> setsearchTerm(event.target.value)}
            />
        </div>    
    
    </div>
  )
}

export default Search

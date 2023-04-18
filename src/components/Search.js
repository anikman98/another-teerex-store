import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  return (
    <div className='search'>
        <input type="search" className='search-bar' value={searchQuery} name="search" placeholder='Search items...' onChange={(e) => setSearchQuery(e.target.value)}/>
    </div>
  )
}

export default Search
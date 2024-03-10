import React from 'react'
import './SearchItem.css'
function SearchItem({search,setSearch}){
    return(
        <form onSubmit={(e)=> e.preventDefault()} className='out-form'>
        <input type="text" placeholder='Search' value={search}
        onChange={(e)=> setSearch(e.target.value)} className='search-bar'/>
        </form>
    )
}
export default SearchItem;
import React from 'react'
import {useState} from 'react'

function SearchBar(props) {
    let [searchTerm, setSearchterm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input type="text" placeholder="Enter a search term" onChange={(e) =>
            setSearchterm(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default SearchBar
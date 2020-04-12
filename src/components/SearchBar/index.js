import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

export default function SearchBar({handleSubmit}){
    const [searchText,setSearchText] = useState('');

    return(
        <form
            className="searchBar"
            onSubmit={e => handleSubmit(e,searchText)}
        >
            <input
                type="text"
                placeholder="Search for a Movie or TV series..."
                value={searchText}
                onChange={e => setSearchText( e.target.value )}
            />
            <button type="submit" >
                <FiSearch size={25} />
            </button>
        </form>
    );
}
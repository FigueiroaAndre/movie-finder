import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import MoviesList from '../../components/MoviesList';
import './styles.css'

export default function Search(){
    const [hasSearched,setHasSearched] = useState(false);
    const [searchContent,setSearchContent] = useState('');

    function handleSubmit(e, searchText){
        e.preventDefault();
        setSearchContent(searchText);
        setHasSearched(true);
    }

    return (
        <div className="searchContainer">
            <SearchBar handleSubmit={handleSubmit} />
            {hasSearched && <MoviesList searchContent={searchContent} />}
        </div>
    );
}
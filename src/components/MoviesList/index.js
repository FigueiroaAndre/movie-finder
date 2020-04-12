import React, { useState, useEffect } from 'react';
import MovieItem from '../MovieItem';
import api, { apikey } from '../../services/api';
import Loader from '../Loader';
import './styles.css';

export default function MoviesList({searchContent}){
    const [loading,setLoading] = useState(true);
    const [listOfMovies,setListOfMovies] = useState([]);

    useEffect(()=>{
        async function getData(){
            await setLoading(true);
            const { data, status } = await api.get('/',{
                params: {
                    s: searchContent,
                    apikey,
                    type: ["series","movie"]
                }
            });
            if (status !== 200) alert('Something went wrong! Please try again later!');
            else if (data.Response === "False") alert('Movie not found!')
            else if (data.Response === "True") setListOfMovies(data.Search);
            setLoading(false);
        }

        getData();
    },[searchContent]);

    return (
            <React.Fragment>
                {loading && <Loader />}
                {!loading && listOfMovies.length > 0 &&
                    <div className="moviesListContainer">
                        {listOfMovies.map(item => {
                            return (
                                <MovieItem 
                                    key={item.imdbID}
                                    poster={item.Poster}
                                    title={item.Title}
                                    imdbID={item.imdbID}
                                />
                            );
                        })}
                    </div>
                }
            </React.Fragment>
    );
}
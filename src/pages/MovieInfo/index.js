import React, { useState, useEffect } from 'react';
import api, { apikey } from '../../services/api';
import Loader from '../../components/Loader';
import './styles.css';

export default function(props){
    const [loading,setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        async function getData(){
            const { data } = await api.get('/', {
                params: {
                    i: props.match.params.id,
                    apikey,
                    plot:"full"
                }
            });
            setMovieInfo(data);
            document.title = data.Title;
            setLoading(false);
        }
        getData();
    },[props.match.params.id]);

    console.log(movieInfo);

    return (
        <div className="movieInfoContainer">
            {loading && <Loader />}
            {!loading &&
                <div className="movieInfo">
                    <h1>{movieInfo.Title}</h1>
                    <img src={movieInfo.Poster} alt={`Poster of ${movieInfo.Title}`} />
                    <div className="info">
                        <div>
                            <h2>Genre:</h2>
                            <p>{movieInfo.Genre}</p>
                        </div>
                        <div>
                            <h2>Release Date:</h2>
                            <p>{movieInfo.Released}</p>
                        </div>
                        <div>
                            <h2>Rated:</h2>
                            <p>{movieInfo.Rated}</p>
                        </div>
                        <div>
                            <h2>IMDB Rating:</h2>
                            <p>{movieInfo.imdbRating}</p>
                        </div>
                        <div>
                            <h2>Director:</h2>
                            <p>{movieInfo.Director}</p>
                        </div>
                        <div>
                            <h2>Actors:</h2>
                            <p>{movieInfo.Actors}</p>
                        </div>
                    </div>
                    <div className="about">
                        <h2>About</h2>
                        <p>{`"${movieInfo.Plot}"`}</p>
                    </div>
                    <a
                        className="standartButton"
                        href={`https://www.imdb.com/title/${props.match.params.id}`}>View on IMDB</a>
                </div>
                }
        </div>
    );
}
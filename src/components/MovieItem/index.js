import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import './styles.css';

export default function MovieItem(props){
    return(
        <div className="itemContainer">
            <img
                src={props.poster}
                alt={`Poster of ${props.title}`}
            />
            <h1>
                {props.title}
            </h1>

            <Link to={`${ROUTES.INFO}/${props.imdbID}`}>
                <button className="standartButton">
                    More Details
                    <FiChevronsRight size={25}/>
                </button>
            </Link>
        </div>
    );
}
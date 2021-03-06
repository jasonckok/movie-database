import React from 'react';
import Movie from '../movie/Movie';

const MovieList = function(props) {
    return (
        <div>
            {props.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
}

export default MovieList;
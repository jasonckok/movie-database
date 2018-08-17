import React from 'react';
import MovieRow from './movie-table-row';

const MovieTable = (props) => {    
    function populateMovieTable() {
        const movies = props.movies;
        return movies.map(movie => <MovieRow key={movie.id} movie={movie}/> )
    }
    return (
        <table className="table table-striped table-hover col-6">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Release Year</th>
                </tr>
            </thead>
            <tbody>
                {populateMovieTable()}
            </tbody>
        </table>
    );
}

export default MovieTable;

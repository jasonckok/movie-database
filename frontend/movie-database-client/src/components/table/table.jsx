import React from 'react';

const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Release Year</th>
                </tr>
            </thead>
            <tbody>
                {props.movies.map(movie => <tr><td>{movie.name}</td><td>{movie.year}</td></tr>)}
            </tbody>
        </table>
    );
}

export default Table;
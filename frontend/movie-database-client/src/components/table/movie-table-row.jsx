import React from 'react';

const MovieRow = (props) => {
    const {id, name, year } = props.movie;
    return (
        <tr onClick={() => console.log(id)}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{year}</td>
        </tr>
    );
}

export default MovieRow;
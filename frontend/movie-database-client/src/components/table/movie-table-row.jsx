import React from 'react';

const MovieRow = (props) => {
    const {id, name, year } = props.movie;
    return (
        <tr  >
            <td>{id}</td>
            <td>{name}</td>
            <td>{year}</td>
            <td>
                <button data-id={id} className="btn btn-danger" onClick={props.onDelete}>Delete Movie
                </button>
            </td>
        </tr>
    );
}

export default MovieRow;
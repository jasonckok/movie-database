import React from 'react';
import './movie.css';

const Movie = function(props) {
    return (
        <div style={{'marginLeft':'2.5%', 'display':'inline-block'}}>
            <p className='info'>{props.movie.name} ({props.movie.year})</p>
            <img src={props.movie.photo} alt="" width='200'/>
        </div>
    );
}

export default Movie;
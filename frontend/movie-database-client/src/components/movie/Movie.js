import React from 'react';
import './movie.css';

const compoenentStyle = {
    'marginLeft':'2.5%',
    'display':'inline-block'
};

const Movie = function(props) {
    return (
        <div onClick={() => console.log(props.movie.id)} style={compoenentStyle}>
            <p className='info'>{props.movie.name} ({props.movie.year})</p>
            <img src="http://via.placeholder.com/200" alt="" width="200"/>
        </div>
    );
}

export default Movie;
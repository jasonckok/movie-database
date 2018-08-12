import React, { Component } from 'react';
import MovieList from './components/movie-list/Movie-list';
import './App.css';

const movies = [
  {
      id: 1,
      name: 'Ghost-Stories',
      year: '2017',
      photo: 'http://via.placeholder.com/200',
  },
  {
      id: 2,
      name: 'Shrek',
      year: '2011',
      photo: 'http://via.placeholder.com/200',
  },
  {
      id: 3,
      name: 'Inception',
      year: '2013',
      photo: 'http://via.placeholder.com/200',
  },
  {
      id: 4,
      name: 'I-Robot',
      year: '2005',
      photo: 'http://via.placeholder.com/200',
  },
  {
      id: 5,
      name: 'Pan\'s Labrith',
      year: '2007',
      photo: 'http://via.placeholder.com/200',
  },
  {
      id: 6,
      name: 'Interstellar',
      year: '2011',
      photo: 'http://via.placeholder.com/200',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
    };
  }
  render() {
    return (
      <div>
        <h1 className='heading'>Welcome to Movie Database</h1>
        <MovieList movies={this.state.movies} />
      </div>
     
    );
  }
}

export default App;

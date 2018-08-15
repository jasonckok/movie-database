import React, { Component } from 'react';
import MovieList from './components/movie-list/Movie-list';
import './App.css';
import MovieService from './services/movie-serive';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.init();
  }
  
  init() {
    MovieService.getAllMovies()
      .then(response => {
        this.setState({
          movies: response,
        });
      });
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

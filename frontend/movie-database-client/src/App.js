import React, { Component } from 'react';
import MovieList from './components/movie-list/Movie-list';
import './App.css';

import MovieService from './services/movie-service';
import MovieTable from './components/table/movie-table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
    };    
  }
  
  componentDidMount() {
    MovieService.getAllMovies()
      .then(
        (response) => {
        this.setState({
          isLoaded: true,
          movies: response,
        });
      },
      (error) => {
        this.setState({isLoaded: true, error});
      });
  }

  render() {    
    const { error, isLoaded, movies } = this.state;
    
    if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    } else if(!isLoaded) {
      return <div>Loading...</div>
    }
    return (
      <div className="container">
        <h1 className='heading'>Welcome to Movie Database</h1>
        <MovieList movies={movies} />
        <MovieTable movies={movies}/>    
      </div>     
    );
  }
}

export default App;

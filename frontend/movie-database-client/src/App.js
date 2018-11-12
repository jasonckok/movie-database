import React, { Component } from 'react';
import './App.css';

import MovieService from './services/movie-service';
import MovieTable from './components/table/movie-table';
import MovieForm from './components/movie-form/movie-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
    };   
    
    this.handleMovieForm = this.handleMovieForm.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }
  
  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
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

  handleMovieForm(movie) {
    MovieService.createMovie(movie)
      .then(
        () => {          
          this.loadMovies();
        },
        (error) => {
          this.setState({isLoaded: true, error});
        }
      );
  }

  deleteMovie(event) {
    const movieId = event.target.dataset.id;
    console.log(movieId)

    MovieService.deleteMovie(movieId)
      .then(() => this.loadMovies())
      .catch((error) => this.setState({error}));
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
        <h1 className="jumbotron text-center text-primary">Welcome to Movie Database</h1>
        <section className="row">
          <MovieTable movies={movies} onDelete={this.deleteMovie}/>
          <MovieForm onMovieFormSubmit={this.handleMovieForm}/>
        </section>   
         
      </div>     
    );
  }
}

export default App;

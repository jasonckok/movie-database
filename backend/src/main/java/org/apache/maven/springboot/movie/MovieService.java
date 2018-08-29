package org.apache.maven.springboot.movie;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class MovieService {
	
	private List<Movie> movies = new ArrayList<>(Arrays.asList(
			new Movie("1", "Avengers: Infinity Wars", "2018"),
			new Movie("2", "Rogue One: A Star Wars Story", "2016"),
			new Movie("3", "Men in Black", "1997"),
			new Movie("4", "Venom", "2018"),
			new Movie("5", "Incredibles 2", "2018"),
			new Movie("6", "Deadpool 2", "2018"),
			new Movie("7", "Ratatouille", "2007"),
			new Movie("8", "Inception", "2010"),
			new Movie("9", "Frozen", "2013"),
			new Movie("10", "Inside Out", "2015")
			));
	
	// Get all movies
	public List<Movie> getAllMovies() {
		return movies;
	}
	
	// Get a movie
	public Movie getMovie(String id) {
		return movies.stream().filter(m -> m.getId().equals(id)).findFirst().get();
	}

	// Add a movie
	public void addMovie(Movie movie) {
		movies.add(movie);
	}

	// Update a movie
	public void updateMovie(String id, Movie movie) {
		for(int i = 0; i < movies.size(); i++) {
			Movie m = movies.get(i);
			if(m.getId().equals(id)) {
				movies.set(i, movie);
				return;
			}
		}
	}

	// Delete a movie
	public void deleteMovie(String id) {
		movies.removeIf(m -> m.getId().equals(id));
	}
}

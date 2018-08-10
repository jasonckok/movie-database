package org.apache.maven.springboot.movie;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class MovieService {
	
	private List<Movie> movies = Arrays.asList(
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
			);
	
	public List<Movie> getAllMovies() {
		return movies;
	}
	
	public Movie getMovie(String id) {
		return movies.stream().filter(m -> m.getId().equals(id)).findFirst().get();
	}
}

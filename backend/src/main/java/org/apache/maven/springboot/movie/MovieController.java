package org.apache.maven.springboot.movie;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MovieController {

	@Autowired
	private MovieService movieService;
	
	@RequestMapping("/movies")
	public List<Movie> getAllMovies() {
		return movieService.getAllMovies();
	}
	
	@RequestMapping("/movies/{id}")
	public Movie getMovie(@PathVariable String id) {
		return movieService.getMovie(id);
	}
}
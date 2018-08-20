package org.apache.maven.springboot.movie;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MovieController {

	@Autowired
	private MovieService movieService;
	
	// GET /movies
	@RequestMapping("/movies")
	public List<Movie> getAllMovies() {
		return movieService.getAllMovies();
	}
	
	// GET /movies/id
	@RequestMapping("/movies/{id}")
	public Movie getMovie(@PathVariable String id) {
		return movieService.getMovie(id);
	}
	
	// POST /movies
	@RequestMapping(method=RequestMethod.POST, value="/movies")
	public void addMovie(@RequestBody Movie movie) {
		movieService.addMovie(movie);
	}
	
	// PUT /movies/id
	@RequestMapping(method=RequestMethod.PUT, value="/movies/{id}")
	public void updateMovie(@RequestBody Movie movie, @PathVariable String id) {
		movieService.updateMovie(id, movie);
	}
	
	// DELETE movies/id
	@RequestMapping(method=RequestMethod.DELETE, value="/movies/{id}")
	public void deleteMovie(@PathVariable String id) {
		movieService.deleteMovie(id);
	}
}
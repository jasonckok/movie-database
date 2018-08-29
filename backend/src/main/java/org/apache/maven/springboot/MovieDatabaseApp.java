package org.apache.maven.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieDatabaseApp {
	
	public static void main(String[] args) {
		SpringApplication.run(MovieDatabaseApp.class, args);
	}
}

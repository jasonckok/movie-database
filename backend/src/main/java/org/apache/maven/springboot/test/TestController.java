package org.apache.maven.springboot.test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@RequestMapping("/")		// maps only to the GET method by default
	public String indexPage() {
		return "Welcome to Movie Database!";
	}
	
	@RequestMapping("/test")		// maps only to the GET method by default
	public String testPage() {
		return "Hi, this is a test page.";
	}
}

package com.todo.rest.webservices.todoservices.helloworld;

import javax.xml.ws.WebServiceException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

//	@RequestMapping(method = RequestMethod.GET, path= "/helloworld")
	@GetMapping(path="/helloworld")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path = "helloworldbean")
	public HelloWorldBean helloWorldBean() {
//		throw new WebServiceException("Something went wrong");
		return new HelloWorldBean("Hello world");
	}
	
	@GetMapping(path = "helloworld/pathvariable/{name}")
	public HelloWorldBean helloWorldPath(@PathVariable String name) {
		return new HelloWorldBean(String.format("hellow World %s", name));
	}
}

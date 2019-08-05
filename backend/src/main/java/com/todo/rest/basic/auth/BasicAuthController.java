package com.todo.rest.basic.auth;

 import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthController {
	
	@GetMapping(path = "basicauth")
	public AuthenticationBean helloWorldBean() {
//		throw new WebServiceException("Something went wrong");
		return new AuthenticationBean("you are authenticated");
	}
}

package com.example.todoapp.basicauth;

import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BasicAuthController {
	
	@GetMapping(path="/app/basicauth")
	public AuthenticationBean helloWorldBeanpv() {
		return new AuthenticationBean("You are authenticated");
	}
}

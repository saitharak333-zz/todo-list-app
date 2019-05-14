package com.database.pro;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserCLI {
	
	@Autowired 
	private UserRepository userRepository;

	@Autowired
	private TodoRepository todoRepository;
	
	@GetMapping(path="/helloworld/{name}")
	public HelloWorldBean helloWorldBeanpv(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
	
	@PostMapping(path="user/{name}/todos")
	public Todo addTodo(@PathVariable String name, @RequestBody Todo todo) {
		return todoRepository.save(todo);
	}
		
	@GetMapping(path="user/{name}/todos")
	public List<Todo> getuserTodos(@PathVariable String name) {
		List<Todo> todos = todoRepository.findAll();
		for (Iterator<Todo> iter = todos.listIterator(); iter.hasNext(); ) {
		    Todo a = iter.next();
		    if ((a.getUsername()).equals(name)) {
		        
		    } else {
		    	iter.remove();
		    }
		}
		return todos;
	}
	
	@PostMapping(path="/user/signup")
	public @Valid String addNewUser (@Valid @RequestBody User user) {
		List<User> users = userRepository.findAll();
		for (User usr : users) {
			if (usr.getUsername().equals(user.getUsername())) {
			    	return "Failure";
			    }
			}
		userRepository.save(user);
		return "Success";
	}

	@GetMapping(path="/user/{name}/todos/{id}")
	public @Valid Optional<Todo> getTodo (@PathVariable String name, @PathVariable long id) {
		return todoRepository.findById(id);
	}
	
	@DeleteMapping(path="user/{name}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String name, @PathVariable long id){
		todoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/user/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
		todoRepository.deleteById(id);
		todoRepository.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK); 
	}
	
	@PostMapping(path="/user/login")
	public @Valid String verifyUser (@Valid @RequestBody User user) {
		List<User> users = userRepository.findAll();
		for (User usr : users) {
			if ((usr.getPassword().equals(user.getPassword()))&(usr.getUsername().equals(user.getUsername()))){
			    	return "Success";
			    }
			}
		return "Failure";
		}
	
	@GetMapping(path="/todos/all")
	public List<Todo> getallTodos() {
		return todoRepository.findAll();
	}
	
	@PostMapping(path="/todo/add")
	public List<Todo> addNew (@Valid @RequestBody Todo todo) {
		todoRepository.save(todo);
		return todoRepository.findAll();
	}
	
	@GetMapping(path="/user/all")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
}

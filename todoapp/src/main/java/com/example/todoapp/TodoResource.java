package com.example.todoapp;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

//import antlr.collections.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TodoResource {

	@Autowired
	private HarcodedTodos todoservice; 
	
	@GetMapping("user/{username}/todos")
	public List<Todos> getall(@PathVariable String username){
		return todoservice.getAllTodos();
	}
	
	@GetMapping("user/{username}/todos/{id}")
	public Todos getaTodo(@PathVariable String username, @PathVariable long id){
		return todoservice.getTodo(username, id);
	}
	
	@DeleteMapping("user/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		Todos todo = todoservice.deletebyID(id);
		if (todo != null) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PutMapping("user/{username}/todos/{id}")
	public ResponseEntity<Todos> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todos todo){
		Todos updatedTodo = todo;
		return new ResponseEntity<Todos>(updatedTodo, HttpStatus.OK); 
	}
	
	@PostMapping("user/{username}/todos")
	public ResponseEntity<Void> addTodo(@PathVariable String username, @RequestBody Todos todo){
		Todos newTodo = todoservice.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}

package com.example.todoapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class HarcodedTodos {
	
	private static List<Todos> todos = new ArrayList<Todos>();
	private static long counterid = 0;
	
	static {
		todos.add(new Todos(++counterid, "tharak", "FrontEnd", "11-10-19"));
		todos.add(new Todos(++counterid, "tharak", "BackEnd", "11-10-19"));
		todos.add(new Todos(++counterid, "tharak", "Database", "11-10-19"));
		todos.add(new Todos(++counterid, "tharak", "Cache", "11-10-19"));		
		todos.add(new Todos(++counterid, "tharak", "test", "11-10-19"));
		todos.add(new Todos(++counterid, "tharak", "aws", "11-10-19"));
		todos.add(new Todos(++counterid, "tharak", "cool", "11-10-19"));
		todos.add(new Todos(++counterid, "tharak", "done", "11-10-19"));
		todos.add(new Todos(++counterid, "tharak", "done", "11-10-19")); 
	}	
	
	public Todos deletebyID(long id){
		Todos todo = findByID(id);
		if (todo == null) {return null;}
		if (todos.remove(todo)) {
		return todo;
		}
		return null;
	}
	
	public Todos getTodo(String username,long id){
		for (Todos todo: todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	public Todos findByID(long id) {
		for (Todos todo: todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<Todos> getAllTodos() {
		return todos;
	}

	public Todos save(Todos todo) {
		if (todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++counterid);
			todos.add(todo);
			return todo;	
		} 
		else {
			deletebyID(todo.getId());
			todos.add(todo);
			return todo;
		}
	}
}

package com.database.pro;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="todo")
public class Todo {
	
	@Id
	@GeneratedValue
	private long id;
	@Column(name = "first_name")
	private String username;
	@Column(name = "description")
	private String description;
	@Column(name = "deadine")
	private String deadline;
	
	protected Todo() {
	
	}
	
	public Todo(String username, String description, String deadline) {
		super();
		this.username = username;
		this.description = description;
		this.deadline = deadline;
	}
	
	public long getId() {
		return id;
	}
	public String getUsername() {
		return username;
	}
	public String getDescription() {
		return description;
	}
	public String getDeadline() {
		return deadline;
	}
	
	
}

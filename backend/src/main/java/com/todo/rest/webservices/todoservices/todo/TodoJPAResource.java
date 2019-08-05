package com.todo.rest.webservices.todoservices.todo;

import java.net.URI;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.slf4j.LoggerFactory;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.todo.rest.webservices.todoservices.todo.Todo;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("jpa")
public class TodoJPAResource {

	private static final org.slf4j.Logger log = LoggerFactory.getLogger(TodoJPAResource.class);
	@Autowired
	private TodoJpaRepository todoJpaRepository;
	
	@GetMapping("users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoJpaRepository.findByUsername(username);
	}
	
	@GetMapping("users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id){
		
		return todoJpaRepository.findById(id).get();
	}
	
	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id ){
		todoJpaRepository.deleteById(id);  
		return ResponseEntity.noContent().build();

	}
	
	@PutMapping("users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
		
		todo.setUsername(username);
		Todo todoUpdates = todoJpaRepository.save(todo);
		return ResponseEntity.ok(todoUpdates);
	}
	
	
	@PostMapping("users/{username}/todos")
	public ResponseEntity<Void> addTodo(@PathVariable String username,  @RequestBody Todo todo){
		todo.setUsername(username);
		Todo todoUpdates = todoJpaRepository.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentContextPath()
		.path("/{id}").buildAndExpand(todoUpdates.getId())
		.toUri();
		return ResponseEntity.created(uri).build();
	}
}

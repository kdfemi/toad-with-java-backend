package com.todo.rest.webservices.todoservices.helloworld;

public class HelloWorldBean {

	private String message;

	public HelloWorldBean(String message) {
		this.message = message;
	}
	

	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return String.format("HelloWorldBean [message=%s]", message);
	}

}

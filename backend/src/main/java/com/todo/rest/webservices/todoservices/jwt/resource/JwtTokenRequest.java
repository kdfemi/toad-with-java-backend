package com.todo.rest.webservices.todoservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU2NTE3MTk2OSwiaWF0IjoxNTY0NTY3MTY5fQ.zvFdSbeKCuvguGIOPtS6-7UqCg6SoBy14Jf6yHcnP_4wnWB099Fe_EZ5QXNMsMbXQu5VzAUQe_gkXmw5s3bsXw"
//    }
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}


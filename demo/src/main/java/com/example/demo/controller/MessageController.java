package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api")
public class MessageController {

    @CrossOrigin(origins = "*")  // for development only
    @GetMapping("/message")
    public String getMessage() {
        return "Hello from Spring Boot!";
    }
}

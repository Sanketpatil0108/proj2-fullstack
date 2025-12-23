package com.sanket.proj2_backend;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Hello {

    @GetMapping("/hello")
    public String hello(){
        System.out.println("Hello world mfs");
        return "Hello world you mfs";
    }
}

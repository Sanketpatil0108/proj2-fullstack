package com.sanket.proj2_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Proj2BackendApplication  implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(Proj2BackendApplication.class, args);
    }
//    Code for paymet service
//    private final PaymentService paymentservice;
//    public Proj2BackendApplication(PaymentService paymentService){
//        this.paymentservice = paymentService;
//    }
//
    @Override
    public void run(String... args){
        // String paymentMode = paymentservice.pay();
        //System.out.println("You have selected "+ paymentMode);
        System.out.println("Application started successfully");
    }

}

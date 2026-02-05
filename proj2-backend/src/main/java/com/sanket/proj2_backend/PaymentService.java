package com.sanket.proj2_backend;

import org.springframework.web.bind.annotation.GetMapping;

public interface PaymentService {
    @GetMapping("/a")
    public String pay();
}

package com.sanket.proj2_backend;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

@Component
@ConditionalOnProperty(name="payment.service", havingValue="sprint")
public class Sprint implements PaymentService{
    @Override
    public String pay(){
        System.out.println("This is Sprint payment method");
        return "Sprint";
    }
}

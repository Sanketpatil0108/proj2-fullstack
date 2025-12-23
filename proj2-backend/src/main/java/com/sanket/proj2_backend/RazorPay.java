package com.sanket.proj2_backend;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

@Component
@ConditionalOnProperty(name="payment.service", havingValue = "razorpay")
public class RazorPay implements PaymentService{
    @Override
    public String pay(){
        System.out.println("This is Razorpay payment method");
        return "Razorpay";
    }
}

package com.sanket.proj2_backend.Controller;

import com.sanket.proj2_backend.Entity.Orders;
import com.sanket.proj2_backend.Service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderController {

    public final OrderService orderService;
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Add your mappings here

    @GetMapping("/allorders")
    public List<Orders> allorders(){
        return orderService.allorders();
    }

    @PostMapping("/placeorder")
    public Orders placeOrder(@RequestBody Orders newOrder){
        return orderService.placeOrder(newOrder);
    }
}

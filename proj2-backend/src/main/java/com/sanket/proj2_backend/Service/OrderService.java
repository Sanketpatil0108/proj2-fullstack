package com.sanket.proj2_backend.Service;

import com.sanket.proj2_backend.Entity.Orders;
import com.sanket.proj2_backend.Repo.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    public final OrderRepository orderRepository;
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Orders> allorders() {
       return orderRepository.findAll();
    }

    public Orders placeOrder(Orders newOrder) {
        return orderRepository.save(newOrder);
    }

    // Service functions be written here.
}

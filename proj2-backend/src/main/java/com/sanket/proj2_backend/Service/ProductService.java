package com.sanket.proj2_backend.Service;

import com.sanket.proj2_backend.Entity.Products;
import com.sanket.proj2_backend.Repo.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    public final ProductRepository productRepository;
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Products> allProducts() {
        return productRepository.findAll();
    }

    public Products addNewProduct(Products newProduct) {
        return productRepository.save(newProduct);
    }
    // Add service functions here
}

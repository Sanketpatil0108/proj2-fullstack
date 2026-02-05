package com.sanket.proj2_backend.Controller;

import com.sanket.proj2_backend.Entity.Products;
import com.sanket.proj2_backend.Service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

    public final ProductService productService;
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/allproducts")
    public List<Products> allProducts()
    {
        return productService.allProducts();
    }

    @PostMapping("/addproduct")
    public Products addProduct(@RequestBody Products newProduct) {
        return productService.addNewProduct(newProduct);
    }
    // Add your mappings here
}

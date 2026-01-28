package com.example.productbackend.service;

import com.example.productbackend.entity.Product;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

public interface ProductService {

    Product createProduct(Product product);

    List<Product> getAllProducts();

    List<Product> searchProductsByTitle(String title);


    List<Product> getProductsByCategory(String category);

     List<Product> getProductsByDateRange(
            LocalDateTime start,
            LocalDateTime end
    ) ;

    List<Product> getProducts(
            String name,
            String category,
            LocalDateTime startDate,
            LocalDateTime endDate
    );


}

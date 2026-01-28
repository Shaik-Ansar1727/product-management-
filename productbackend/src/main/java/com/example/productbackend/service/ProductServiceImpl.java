package com.example.productbackend.service;

import com.example.productbackend.entity.Product;
import com.example.productbackend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {

        this.productRepository = productRepository;
    }

    @Override
    public Product createProduct(Product product) {

        if (product.getTitle() == null || product.getTitle().isEmpty()) {
            throw new IllegalArgumentException("Product title cannot be empty");
        }
        return productRepository.save(product);
    }


    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> searchProductsByTitle(String title) {
        return productRepository.findByTitleContainingIgnoreCase(title);
    }

    @Override
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategoryIgnoreCase(category);
    }

    @Override
    public List<Product> getProductsByDateRange(
            LocalDateTime startDate,
            LocalDateTime endDate
    ) {
        if (endDate != null) {
            endDate = endDate.withHour(23).withMinute(59).withSecond(59);
        }
        return productRepository.findByCreatedAtBetween(startDate, endDate);
    }

    @Override
    public List<Product> getProducts(
            String name,
            String category,
            LocalDateTime startDate,
            LocalDateTime endDate
    ) {
        if (endDate != null) {
            endDate = endDate.withHour(23).withMinute(59).withSecond(59);
        }
        return productRepository.findProducts(name, category, startDate, endDate);
    }


}

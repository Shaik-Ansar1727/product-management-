package com.example.productbackend.repository;

import com.example.productbackend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import  java.time.LocalDateTime;
import  java.util.List;
public interface ProductRepository extends JpaRepository<Product,Long> {

    List<Product> findByTitleContainingIgnoreCase(String title);

    List<Product> findByCategoryIgnoreCase(String category);


    @Query("""
        SELECT p FROM Product p
        WHERE (:startDate IS NULL OR p.createdAt >= :startDate)
          AND (:endDate IS NULL OR p.createdAt <= :endDate)
    """)
    List<Product> findByCreatedAtBetween(
            @Param("startDate") LocalDateTime startDate,
            @Param("endDate") LocalDateTime endDate
    );

    @Query("""
    SELECT p FROM Product p
    WHERE (:name IS NULL OR LOWER(p.title) LIKE LOWER(CONCAT('%', :name, '%')))
      AND (:category IS NULL OR LOWER(p.category) = LOWER(:category))
      AND (:startDate IS NULL OR p.createdAt >= :startDate)
      AND (:endDate IS NULL OR p.createdAt <= :endDate)
""")
    List<Product> findProducts(
            @Param("name") String name,
            @Param("category") String category,
            @Param("startDate") LocalDateTime startDate,
            @Param("endDate") LocalDateTime endDate
    );



}

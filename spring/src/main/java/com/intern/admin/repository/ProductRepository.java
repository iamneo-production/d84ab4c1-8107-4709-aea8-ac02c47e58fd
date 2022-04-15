package com.intern.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.intern.admin.model.ProductModel;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel ,String> {

	//void save(Optional<ProductModel> productmodel);
	
}

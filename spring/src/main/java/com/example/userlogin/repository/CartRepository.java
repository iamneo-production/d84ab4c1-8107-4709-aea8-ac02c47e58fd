package com.intern.admin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.intern.admin.model.cartModel;

public interface CartRepository extends JpaRepository<cartModel,String> {

	public static final String cartdetails="Select * from cart where userid=?1";
	@Query(value=cartdetails , nativeQuery=true)
	public List<cartModel> getCartProducts(String id);
}

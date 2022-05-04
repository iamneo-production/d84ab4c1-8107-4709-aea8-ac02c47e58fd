package com.intern.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.intern.admin.model.OrderModel;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel,String> {
    @Query("SELECT o from OrderModel o WHERE o.userId=?1")
    public List<OrderModel> findUserId(String userId);
}

package com.example.userlogin.repository;

import com.example.userlogin.model.LoginModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<LoginModel,String> {
    @Query("SELECT u FROM LoginModel u WHERE u.email=?1")
    LoginModel findByEmail(String email);
    @Query("SELECT u FROM LoginModel u WHERE u.password=?1")
    LoginModel findByPassword(String password);
}

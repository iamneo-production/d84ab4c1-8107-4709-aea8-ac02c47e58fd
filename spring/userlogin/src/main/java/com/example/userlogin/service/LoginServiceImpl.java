package com.example.userlogin.service;

import com.example.userlogin.model.LoginModel;
import com.example.userlogin.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService{
    @Autowired
    private LoginRepository loginRepository;

    @Override
    public LoginModel savelog(LoginModel loginModel) {
        return loginRepository.save(loginModel);
    }

    @Override
    public LoginModel findByEmail(String email) {
        return loginRepository.findByEmail(email);
    }

    @Override
    public LoginModel findByPassword(String password) {
        return loginRepository.findByPassword(password);
    }
}

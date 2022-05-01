package com.example.userlogin.service;

import com.example.userlogin.model.LoginModel;

public interface LoginService {
    public LoginModel savelog(LoginModel loginModel);
    public LoginModel findByEmail(String email);
    public LoginModel findByPassword(String password);
}

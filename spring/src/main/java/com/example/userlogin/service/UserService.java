package com.example.userlogin.service;

import com.example.userlogin.model.UserModel;


import java.util.List;

public interface UserService {
    public UserModel saveUser(UserModel userModel);
    public List<UserModel>getAllUser();
}

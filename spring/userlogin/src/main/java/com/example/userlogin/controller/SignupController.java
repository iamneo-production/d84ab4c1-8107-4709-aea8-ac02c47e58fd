package com.example.userlogin.controller;

import com.example.userlogin.model.LoginModel;
import com.example.userlogin.model.UserModel;
import com.example.userlogin.service.LoginService;
import com.example.userlogin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/signup")
public class SignupController {
    @Autowired
    private UserService userService;
    @Autowired
    private LoginService loginService;
    @PostMapping("/signup")
    public String saveUser(@RequestBody UserModel userModel){
        userService.saveUser(userModel);
        LoginModel loginModel=new LoginModel();
        loginModel.setUserId(userModel.getId());
        loginModel.setEmail(userModel.getEmail());
        loginModel.setPassword(userModel.getPassword());
        loginService.savelog(loginModel);
        return "added user";
    }
    @GetMapping("/getAll")
    public List<UserModel> list(){
        return userService.getAllUser();
    }


}

package com.example.userlogin.controller;

import com.example.userlogin.model.LoginModel;
import com.example.userlogin.model.UserModel;
import com.example.userlogin.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<LoginModel>checkUser(@RequestBody LoginModel loginModel){

        LoginModel loginModel1=loginService.findByEmail(loginModel.getEmail());
        if(loginModel1==null){
            return new ResponseEntity<LoginModel>(HttpStatus.NOT_FOUND);
        }
        if(!loginModel1.getPassword().equals(loginModel.getPassword())){
            return new ResponseEntity<LoginModel>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<LoginModel>(HttpStatus.OK);
    }

}

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
        /*LoginModel lm=loginService.findByEmail(loginModel.getEmail());
        String passwordExists=lm.getPassword();
        String enteredPassword=loginModel.getPassword();
        String enteredEmail=loginModel.getEmail();
        String mailExists=lm.getEmail();
        if(lm.getEmail().isEmpty()){
            return new ResponseEntity<LoginModel>(HttpStatus.NOT_FOUND);
        }
        else if(passwordExists.equals(enteredPassword)){
            return new ResponseEntity<LoginModel>(HttpStatus.OK);
        }
        else if(mailExists.equals(enteredEmail)){
            return new ResponseEntity<LoginModel>(HttpStatus.NOT_FOUND);
        }
        else{
            return new ResponseEntity<LoginModel>(HttpStatus.NOT_FOUND);
        }*/
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

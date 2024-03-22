package com.esikshya.e_sikshya_madhyam.controller;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esikshya.e_sikshya_madhyam.model.User;
import com.esikshya.e_sikshya_madhyam.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> userByEmailPassword(@RequestBody User user) {
        var optionalUser = userService.getByEmail(user.getEmail());
        var optionalUserPass = userService.getByPassword(user.getPassword());
        if (optionalUser.isPresent() && optionalUserPass.isPresent()) {
            return new ResponseEntity<>(optionalUser.get(), HttpStatusCode.valueOf(200));
        } else {
            return new ResponseEntity<>(HttpStatusCode.valueOf(204));
        }
    }

}

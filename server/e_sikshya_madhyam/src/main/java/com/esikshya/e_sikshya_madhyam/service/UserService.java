package com.esikshya.e_sikshya_madhyam.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.esikshya.e_sikshya_madhyam.model.User;
import com.esikshya.e_sikshya_madhyam.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> getByPassword(String pass) {
        return userRepository.findByPassword(pass);
    }

}

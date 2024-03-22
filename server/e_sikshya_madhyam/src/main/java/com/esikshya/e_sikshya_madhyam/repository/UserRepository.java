package com.esikshya.e_sikshya_madhyam.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esikshya.e_sikshya_madhyam.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findByPassword(String password);
}

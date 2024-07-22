package com.esikshya.e_sikshya_madhyam.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.esikshya.e_sikshya_madhyam.dto.AccountRequestDTO;
import com.esikshya.e_sikshya_madhyam.dto.AccountResponseDTO;
import com.esikshya.e_sikshya_madhyam.mapper.AccountMapper;
import com.esikshya.e_sikshya_madhyam.service.IAccountService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/accounts")
@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:3000")
public class AccountController {
    private final IAccountService accountService;

    // User signup
    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AccountResponseDTO createAccount(@Valid @RequestBody AccountRequestDTO dto) {
        var account = AccountMapper.modelMapper(dto);
        var result = accountService.createAccount(account);
        return AccountMapper.dtoMapper(result);
    }

}

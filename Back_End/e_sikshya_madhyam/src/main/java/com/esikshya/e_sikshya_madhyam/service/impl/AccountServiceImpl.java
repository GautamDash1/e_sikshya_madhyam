package com.esikshya.e_sikshya_madhyam.service.impl;

import org.springframework.stereotype.Service;

import com.esikshya.e_sikshya_madhyam.model.Account;
import com.esikshya.e_sikshya_madhyam.repository.AccountRepository;
import com.esikshya.e_sikshya_madhyam.service.IAccountService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements IAccountService {
     private final AccountRepository accountRepository;

    @Override
    public Account createAccount(Account account) {
        accountRepository.save(account);
        return account;
    }
    
}

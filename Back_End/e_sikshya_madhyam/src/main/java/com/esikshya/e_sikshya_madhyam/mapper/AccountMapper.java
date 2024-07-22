package com.esikshya.e_sikshya_madhyam.mapper;

import org.springframework.beans.BeanUtils;

import com.esikshya.e_sikshya_madhyam.dto.AccountRequestDTO;
import com.esikshya.e_sikshya_madhyam.dto.AccountResponseDTO;
import com.esikshya.e_sikshya_madhyam.model.Account;

public class AccountMapper {
    private AccountMapper() {
    }

    public static Account modelMapper(AccountRequestDTO dto) {
        var account = new Account();
        BeanUtils.copyProperties(dto, account);
        return account;
    }

    public static AccountResponseDTO dtoMapper(Account result) {
        return new AccountResponseDTO(result.getAccountSlNo(),
                result.getUsername(),
                result.getEmail());

    }
}

package com.esikshya.e_sikshya_madhyam.dto;

import jakarta.validation.constraints.NotNull;

public record AccountRequestDTO(
        @NotNull(message = "Account holder name should not be Null") String username,
        @NotNull(message = "Account email should not be Null") String email,
        @NotNull(message = "Account password should not be Null") String password) {

}

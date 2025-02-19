package io.restapi.crud.io;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExpenseRequest {
    @NotNull
    @NotBlank(message = "Name is required")
    @Size(min = 3, max = 50, message = "Name must be between 3 and 50 characters")
    private String name;
    private String note;
    @NotNull(message = "Category is required") @NotBlank
    private String category;
    private Date date;
    @NotNull(message = "Amount is required")
    private BigDecimal amount;

}

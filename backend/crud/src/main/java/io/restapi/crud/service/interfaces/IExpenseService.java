package io.restapi.crud.service.interfaces;

import io.restapi.crud.dto.ExpenseDTO;

import java.util.List;

public interface IExpenseService {
    List<ExpenseDTO> getAllExpenses();
    ExpenseDTO getExpenseByExpenseId(String expenseId);
}

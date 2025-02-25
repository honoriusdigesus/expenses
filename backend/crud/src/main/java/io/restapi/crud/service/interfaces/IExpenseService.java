package io.restapi.crud.service.interfaces;

import io.restapi.crud.dto.ExpenseDTO;

import java.util.List;

public interface IExpenseService {
    List<ExpenseDTO> getAllExpenses();
    ExpenseDTO getExpenseByExpenseId(String expenseId);
    void deleteExpenseByExpenseId(String expenseId);
    ExpenseDTO saveExpenseDetails(ExpenseDTO expenseDTO);
    ExpenseDTO updateExpenseDetails(String expenseId, ExpenseDTO expenseDTO);
}

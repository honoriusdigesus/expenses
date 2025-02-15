package io.restapi.crud.controller;

import io.restapi.crud.dto.ExpenseDTO;
import io.restapi.crud.io.ExpenseResponse;
import io.restapi.crud.service.impl.ExpenseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("*") // Permite que a API sea acessada por qualquer domínio
public class ExpenseController {

    private final ExpenseService expenseService;
    private final ModelMapper modelMapper;

    @GetMapping("/expenses")
    public List<ExpenseResponse> getExpenses() {
        log.info("[ExpenseController] API GET: Get all expenses");
        var list= expenseService.getAllExpenses();
        return list.stream().map(expenseDTO -> modelMapper.map(expenseDTO, ExpenseResponse.class)).toList();

    }

    @GetMapping("/view/expenses/{expenseId}")
    public ExpenseResponse getExpenseById(@PathVariable String expenseId) {
        log.info("[ExpenseController] API GET: Get expense by id {}", expenseId);
        ExpenseDTO expense = expenseService.getExpenseByExpenseId(expenseId);
        return modelMapper.map(expense, ExpenseResponse.class);
    }

    @DeleteMapping("/delete/expenses/{expenseId}")
    public String deleteExpenseById(@PathVariable String expenseId) {
        log.info("[ExpenseController] API DELETE: Delete expense by id {}", expenseId);
        expenseService.deleteExpenseByExpenseId(expenseId);
        return "Expense deleted successfully";
    }
    
}

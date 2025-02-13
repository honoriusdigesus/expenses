package io.restapi.crud.controller;

import io.restapi.crud.io.ExpenseResponse;
import io.restapi.crud.service.impl.ExpenseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
}

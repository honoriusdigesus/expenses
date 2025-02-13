package io.restapi.crud.service.impl;

import io.restapi.crud.dto.ExpenseDTO;
import io.restapi.crud.entity.ExpenseEntity;
import io.restapi.crud.repository.ExpenseRepository;
import io.restapi.crud.service.interfaces.IExpenseService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExpenseService implements IExpenseService
{
    private final ExpenseRepository expenseRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<ExpenseDTO> getAllExpenses() {
        List<ExpenseEntity> list = expenseRepository.findAll();
        return list.stream().map(expenseEntity -> modelMapper.map(expenseEntity, ExpenseDTO.class)).toList();
    }
}

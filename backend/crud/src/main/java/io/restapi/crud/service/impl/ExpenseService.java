package io.restapi.crud.service.impl;

import io.restapi.crud.Exceptions.ResourceNotFoundException;
import io.restapi.crud.dto.ExpenseDTO;
import io.restapi.crud.entity.ExpenseEntity;
import io.restapi.crud.repository.ExpenseRepository;
import io.restapi.crud.service.interfaces.IExpenseService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

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

    @Override
    public ExpenseDTO getExpenseByExpenseId(String expenseId) {
        ExpenseEntity optionalExpense = expenseRepository.findByExpenseId(expenseId).orElseThrow(()-> new ResourceNotFoundException("[ExpenseService] Expense not found with id: " + expenseId));
        return modelMapper.map(optionalExpense, ExpenseDTO.class);
    }

    @Override
    public void deleteExpenseByExpenseId(String expenseId) {
        ExpenseEntity optionalExpense = expenseRepository.findByExpenseId(expenseId).orElseThrow(()-> new ResourceNotFoundException("[ExpenseService] Expense not found with id: " + expenseId));
        expenseRepository.delete(optionalExpense);
    }

    @Override
    public ExpenseDTO saveExpenseDetails(ExpenseDTO expenseDTO) {
        ExpenseEntity expenseEntity = modelMapper.map(expenseDTO, ExpenseEntity.class);
        expenseEntity.setExpenseId(UUID.randomUUID().toString());
        expenseRepository.save(expenseEntity);
        return expenseDTO;
    }

    /**
     * @param expenseId 
     * @param expenseDTO
     * @return
     */
    @Override
    public ExpenseDTO updateExpenseDetails(String expenseId, ExpenseDTO expenseDTO) {
        ExpenseEntity optionalExpense = expenseRepository.findByExpenseId(expenseId).orElseThrow(()-> new ResourceNotFoundException("[ExpenseService] Expense not found with id: " + expenseId));
        ExpenseEntity updateExpenseEntity = modelMapper.map(expenseDTO, ExpenseEntity.class);
        updateExpenseEntity.setId(optionalExpense.getId());
        updateExpenseEntity.setExpenseId(optionalExpense.getExpenseId());
        updateExpenseEntity.setCreatedAt(optionalExpense.getCreatedAt());
        updateExpenseEntity.setUpdatedAt(optionalExpense.getUpdatedAt());
        updateExpenseEntity = expenseRepository.save(updateExpenseEntity);
        //Map updateExpenseEntity and return
        return modelMapper.map(updateExpenseEntity, ExpenseDTO.class);
    }
}

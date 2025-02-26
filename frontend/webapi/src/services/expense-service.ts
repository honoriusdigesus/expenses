import apiClient from "../config/api-client.ts";
import {Expense} from "../model/Expense.ts";

export const getExpenses = () => {
    return apiClient.get<Expense[]>("/expenses");
}

export const getExpenseByExpenseId = (expenseId: string) => {
    return apiClient.get<Expense>(`/view/expenses/${expenseId}`);
}

export const deleteExpenseExpenseId = (expenseId: string) => {
    return apiClient.delete(`/delete/expenses/${expenseId}`);
}

export const saveOrUpdateExpense = (expense: Expense) => {
    if (expense.expenseId !== undefined) {
        return apiClient.put(`/update/expenses/${expense.expenseId}`, expense);
    }
    return apiClient.post("/add/expenses", expense);
}
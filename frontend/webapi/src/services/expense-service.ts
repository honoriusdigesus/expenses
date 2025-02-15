import apiClient from "../config/api-client.ts";
import {Expense} from "../model/Expense.ts";

export const getExpenses = () => {
    return apiClient.get<Expense[]>("/expenses");
}

export const getExpenseByExpenseId = (expenseId: string) => {
    return apiClient.get<Expense>(`/view/expenses/${expenseId}`);
}
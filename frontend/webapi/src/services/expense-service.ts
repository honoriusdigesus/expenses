import apiClient from "../config/api-client.ts";
import {Expense} from "../model/Expense.ts";

export const getExpenses = () => {
    return apiClient.get<Expense[]>("/expenses");
}
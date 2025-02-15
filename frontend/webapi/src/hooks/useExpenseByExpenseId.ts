import {useEffect, useState} from "react";
import {getExpenseByExpenseId} from "../services/expense-service.ts";
import {Expense} from "../model/Expense.ts";

const useExpenseByExpenseId = (expenseId: string) => {
    const [expense, setExpense] = useState<Expense | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getExpenseByExpenseId(expenseId)
            .then(response => {
                setExpense(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError("Error fetching expense by id");
                setLoading(false);
            });
    }, [expenseId]);

    return {expense, loading, error};
}

export default useExpenseByExpenseId;
import {useEffect, useState} from "react";
import {Expense} from "../model/Expense.ts";
import {getExpenses} from "../services/expense-service.ts";

const useExpenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);//Variable creada para almacenar los gastos
    const [error, setError] = useState(null);//Variable creada para almacenar los errores
    const [loading, setLoader] = useState(true);//Variable creada para almacenar el estado de carga

    useEffect(() => {
        setLoader(true);
        getExpenses()//Es la función que se encarga de hacer la petición a la API
            .then(response=>{
                setExpenses(response.data);
            })
            .catch(error=>setError(error.message))
            .finally(()=>setLoader(false));
    }, []);
    return {expenses, error, loading};
};
export default useExpenses;
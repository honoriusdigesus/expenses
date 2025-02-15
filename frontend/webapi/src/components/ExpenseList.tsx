import {Expense} from "../model/Expense.ts";
import CurrencyUtils from "../utils/CurrencyUtils.ts";
import DateUtils from "../utils/DateUtils.ts";
import {Link} from "react-router-dom";

interface PropsExpenses{
    expenses: Expense[];
};

const ExpenseList = ({ expenses }:PropsExpenses) => {
return (
/*
v        <div>
            <table border={1 }>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.expenseId}>
                        <td>{expense.name}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
* */

    <div className="card">
        <h3 className="card-header">Expense<span className="float-end">Amount</span></h3>

        <div className="card-body">
            {expenses.map(expense =>
                <Link className="d-flex justify-content-between border-bottom-1 p-3 text-dark" style={{textDecoration:"none"}} key={expense.expenseId} to={`/view/${expense.expenseId}`}>
                <div className="card-title m-0" >
                    <h4>{expense.name}</h4>
                    <span className="fst-italic">
                        {DateUtils.getFormatDate(new Date(expense.date))}
                    </span>
                </div>
                <div className="card-subtitle text-muted mx-2">
                    <span className="badge rounded-pill app-primary-bg text-white bg-primary">
                        {CurrencyUtils.formatToINR(expense.amount)}
                    </span>
                </div>
            </Link>)}

        </div>
    </div>
    );
};
export default ExpenseList;

import {Link, useParams} from "react-router-dom";
import CurrencyUtils from "../../utils/CurrencyUtils.ts";
import DateUtils from "../../utils/DateUtils.ts";
import useExpenseByExpenseId from "../../hooks/useExpenseByExpenseId.ts";

const ExpenseDetails = () => {

    const {expenseId} = useParams<{expenseId:string}>();
    const {expense, error, loading} = useExpenseByExpenseId(expenseId!);

    if (!expenseId) {
        return <p className="text-danger">Invalid Expense Id</p>;
    }

    return (
        <div className="container mt-2">
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            <div className="d-flex flex-row-reverse mb-2">
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-primary mx-2">Edit</button>
                <Link className="btn btn-warning" to="/">Back</Link>
            </div>
            <h3 className="card-header m-3">Expense Details</h3>
            <div className="card-body">
                <table className="table table-borderless table-responsive">
                    <tbody>
                    <tr>
                        <td>Expense Id</td>
                        <td>{expenseId}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{expense ? expense.name : "N/A"}</td>
                    </tr>

                    <tr>
                        <td>Category</td>
                        <td>{expense ? expense.category : "N/A"}</td>
                    </tr>

                    <tr>
                        <td>Amount</td>
                        <td>{expense ? CurrencyUtils.formatToINR(expense?.amount) : "N/A"}</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>{expense ? DateUtils.getFormatDate(new Date(expense.date) ): "N/A"}</td>
                    </tr>

                    <tr>
                        <td>Note</td>
                        <td>{expense ? expense.note : "N/A"}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ExpenseDetails;

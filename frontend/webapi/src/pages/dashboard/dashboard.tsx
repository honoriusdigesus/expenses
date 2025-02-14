import ExpenseList from "../../components/ExpenseList.tsx";
import useExpenses from "../../hooks/useExpenses.ts";
import DashboardStatus from "./DashboardStatus.tsx";
import {Expense} from "../../model/Expense.ts";

const Dashboard = () => {

    const loggedInUser:string = "Honorius di Gesus";
    const {expenses,loading,error} = useExpenses();

    //Calculate total expenses
    const totalExpenses=expenses.reduce((acc:number, expense: Expense) => acc + expense.amount, 0);

    return (
        <div className={"container"}>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <DashboardStatus loggedInUser={loggedInUser} totalExpenses={totalExpenses}/>
            <hr/>
            <ExpenseList expenses={expenses}/>
        </div>
    );
};
export default Dashboard;

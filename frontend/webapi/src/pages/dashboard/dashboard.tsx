import ExpenseList from "../../components/ExpenseList.tsx";
import useExpenses from "../../hooks/useExpenses.ts";

const Dashboard = () => {

    const {expenses,loading,error} = useExpenses();

    return (
        <div className={"container"}>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <ExpenseList expenses={expenses}/>
        </div>
    );
};
export default Dashboard;

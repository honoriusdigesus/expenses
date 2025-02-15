import Dashboard from "./pages/dashboard/dashboard.tsx";
import Navbar from "./components/Navbar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login.tsx";
import Register from "./pages/register/Register.tsx";
import NewExpense from "./pages/expenses/NewExpense.tsx";
import ExpenseDetails from "./pages/expenses/ExpenseDetails.tsx";
import ExpenseReport from "./pages/expenses/ExpenseReport.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/new" element={<NewExpense/>}/>
                <Route path="/view/:expenseId" element={<ExpenseDetails/>}/>
                <Route path="/report" element={<ExpenseReport/>}/>
            </Routes>
        </BrowserRouter>
    );
};
export default App;

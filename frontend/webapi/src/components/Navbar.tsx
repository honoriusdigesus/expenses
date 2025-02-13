import {FaBars} from "react-icons/fa";
import Logo from "./Logo.tsx";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Logo />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav active" aria-current="page">
                        <NavLink className="nav-link" to="/">Dashboard</NavLink>
                        <NavLink className="nav-link" to="/new">New Expense</NavLink>
                        <NavLink className="nav-link" to="/report">Report</NavLink>
                    </div>
                </div>
                <div className="d-flex" role="search">
                    {/*Button login y logout*/}
                    <NavLink className="btn btn-outline-primary p-2 mx-2" to="/login">Login</NavLink>
                    <NavLink className="btn btn-outline-primary p-2" to="/register">Logout</NavLink>
                    <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
                        <FaBars />

                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;



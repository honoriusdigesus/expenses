import logo from '../assets/react.svg';
import {Link} from "react-router-dom";
const Logo = () => {
    return (
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width="40" height="40"/>
        </Link>
    );
};
export default Logo;

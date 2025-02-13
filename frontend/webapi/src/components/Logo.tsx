import logo from '../assets/react.svg';
const Logo = () => {
    return (
        <div className="navbar-brand">
            <img src={logo} alt="logo" width="40" height="40"/>
        </div>
    );
};
export default Logo;

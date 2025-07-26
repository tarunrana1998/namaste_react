import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Import the CSS

const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="App Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>       
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li onClick={
                        () => {

                            console.log("Login clicked");
                            if (btnName === "Login") {
                                setBtnName("Logout");
                            } else {
                                setBtnName("Login");
                            }

                            // Add your login logic here
                        }
                    } >{btnName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

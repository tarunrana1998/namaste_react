import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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

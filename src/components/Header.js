import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Import the CSS

const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    return (
        <div className="header flex flex-col sm:flex-row justify-between items-center px-4 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-indigo-500 via-blue-400 to-blue-300 shadow-lg sticky top-0 z-50 rounded-b-2xl animate-fadeIn">
            <div className="logo-container flex-shrink-0">
                <img className="logo h-16 w-auto object-contain drop-shadow-lg animate-bounce" src={LOGO_URL} alt="App Logo" />
            </div>
            <div className="nav-items w-full sm:w-auto mt-4 sm:mt-0">
                <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 list-none m-0 p-0 justify-center sm:justify-end">
                    <li className="text-white font-semibold text-lg px-4 py-2 rounded-lg hover:bg-white hover:text-indigo-500 transition duration-300 cursor-pointer animate-fadeInUp">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-white font-semibold text-lg px-4 py-2 rounded-lg hover:bg-white hover:text-indigo-500 transition duration-300 cursor-pointer animate-fadeInUp">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="text-white font-semibold text-lg px-4 py-2 rounded-lg hover:bg-white hover:text-indigo-500 transition duration-300 cursor-pointer animate-fadeInUp">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="text-white font-semibold text-lg px-4 py-2 rounded-lg hover:bg-white hover:text-indigo-500 transition duration-300 cursor-pointer animate-fadeInUp">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="text-white font-semibold text-lg px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-indigo-700 transition duration-300 cursor-pointer animate-fadeInUp" onClick={() => {
                        console.log("Login clicked");
                        setBtnName(btnName === "Login" ? "Logout" : "Login");
                    }}>{btnName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
